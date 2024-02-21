import type { Plugin } from 'vite';

import * as fs from 'fs';
import * as path from 'path';

import chalk from 'chalk';
import * as chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import { minimatch } from 'minimatch';

interface DirectoryExportOptionsType {
  directoryPath: string;
  fileExtensions: Array<string>;
  namingConvention?: 'original' | 'camel' | 'snake';
  exportType?: 'default_to_named' | 'default' | 'named';
  isOmitExtension?: boolean;
  excludes?: Array<string>;
}

// 기본 옵션 값
const DEFAULT_OPTIONS: Partial<DirectoryExportOptionsType> = {
  namingConvention: 'original',
  exportType: 'default_to_named',
  isOmitExtension: false,
  excludes: undefined,
};

// ====================================================================================
//                                 🛠 Utility Functions
// ====================================================================================

/**
 * 디렉터리의 존재 여부를 확인
 * @param directoryPath - 디렉터리 경로
 * @returns 디렉터리 존재 여부
 */
function doesDirectoryExist(directoryPath: string): boolean {
  if (!fs.existsSync(directoryPath)) {
    console.warn(
      chalk.cyan('[directory-exporter]'),
      chalk.yellow(`Skipped non-existing directory: ${directoryPath}`)
    );
    return false;
  }

  return true;
}

/**
 * 문자열을 카멜케이스로 변환
 * @param {string} str 변환할 문자열
 * @returns {string} 카멜케이스로 변환된 문자열
 */
function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) => group.charAt(1).toUpperCase());
}

/**
 * 문자열을 스네이크케이스로 변환
 * @param {string} str 변환할 문자열
 * @returns {string} 스네이크케이스로 변환된 문자열
 */
function toSnakeCase(str: string): string {
  return str
    .replace(/[A-Z]+/g, (match) => `_${match.toLowerCase()}`)
    .replace(/__+/g, '_')
    .replace(/^_/, '')
    .replace(/_$/, '');
}

/**
 * 주어진 이름을 유효한 JavaScript 변수명으로 변환
 * @param {string} str 변환할 문자열
 * @returns {string} 유효한 JavaScript 변수명
 */
function toValidJSVariableName(str: string): string {
  let validName = str.replace(/[^a-zA-Z0-9_]/g, '');
  if (/^[0-9]/.test(validName)) {
    validName = '_' + validName;
  }
  return validName;
}

/**
 * 네이밍 규칙에 따라 수정된 export 이름을 반환
 *
 * @param {string} basename - 파일의 기본 이름
 * @param {Record<string, number>} filenames - 중복 파일명 처리를 위한 객체
 * @param {string} namingConvention - 네이밍 규칙 (original, camel, snake 중 선택)
 * @returns {string} - 수정된 export 이름
 */
function getModifiedExportName(
  basename: string,
  filenames: Record<string, number>,
  namingConvention: string
): string {
  if (filenames[basename]) {
    filenames[basename]++;
    basename = `${basename}${namingConvention === 'snake' ? '_' : ''}${filenames[basename]}`;
  } else {
    filenames[basename] = 1;
  }

  switch (namingConvention) {
    case 'camel':
      return toCamelCase(basename);
    case 'snake':
      return toSnakeCase(basename);
    default:
      return basename;
  }
}

// ====================================================================================
//                       Directory Handling and File Generation
// ====================================================================================

interface GenerateExportStatementOptionsType
  extends Omit<DirectoryExportOptionsType, 'directoryPath'> {
  item: string;
  extname: string;
  filenames: Record<string, number>;
}

/**
 * export 구문을 생성
 * @returns 생성된 export 구문
 * @param options
 */
function generateExportStatement(
  options: GenerateExportStatementOptionsType
): string {
  const {
    exportType,
    extname,
    filenames,
    isOmitExtension,
    item,
    namingConvention = 'original',
  } = options;
  let basename = path.basename(item, extname);
  const exportName = getModifiedExportName(
    basename,
    filenames,
    namingConvention
  );

  if (!isOmitExtension) {
    basename += extname;
  }

  switch (exportType) {
    case 'default':
      return `export { default } from './${basename}';`;
    case 'named':
      return `export * from './${basename}';`;
    default:
      return `export { default as ${toValidJSVariableName(exportName)} } from './${basename}';`;
  }
}

/**
 * 디렉터리 내의 파일 및 서브디렉터리를 처리
 * @param options
 * @returns 디렉터리의 처리 결과
 */
function handleDirectoryContent(
  options: DirectoryExportOptionsType
): Array<string> {
  const { directoryPath, excludes, fileExtensions } = options;

  if (!doesDirectoryExist(directoryPath) || !fileExtensions.length) {
    return [];
  }

  const indexContent: Array<string> = [];
  const filenames: Record<string, number> = {};

  for (const item of fs.readdirSync(directoryPath)) {
    const itemPath = path.join(directoryPath, item);
    const extname = path.extname(item);

    // 제외할 디렉터리나 파일 확인
    if (excludes && excludes.some((pattern) => minimatch(itemPath, pattern))) {
      continue;
    }
    if (fileExtensions.includes(extname) && item !== 'index.ts') {
      indexContent.push(
        generateExportStatement({
          ...options,
          item,
          extname,
          filenames,
        })
      );
    } else if (fs.statSync(itemPath).isDirectory()) {
      recursivelyGenerateIndexFiles({
        ...options,
        directoryPath: itemPath,
      });
    }
  }

  return indexContent;
}

/**
 * 주어진 디렉터리에 index.ts 파일의 내용을 작성
 *
 * @param {string} directoryPath - 디렉터리 경로
 * @param {string[]} indexContent - index.ts의 내용
 */
function writeToIndexFile(directoryPath: string, indexContent: Array<string>) {
  const indexPath = path.join(directoryPath, 'index.ts');
  const newIndexContent = indexContent.join('\n') + '\n';

  // 기존에 파일이 존재하면, 그 파일의 내용을 읽기
  let currentContent = '';
  if (fs.existsSync(indexPath)) {
    currentContent = fs.readFileSync(indexPath, 'utf-8');
  }

  // 새로운 내용과 기존 내용이 동일하면 아무것도 하지 않음
  if (currentContent === newIndexContent) {
    return;
  }

  // 디렉터리 내에 다른 파일이 없는지 확인
  const otherFiles = fs
    .readdirSync(directoryPath)
    .filter((file) => file !== 'index.ts');

  // 디렉터리 내에 다른 파일이 없으면 index.ts 파일을 삭제
  if (otherFiles.length === 0 && fs.existsSync(indexPath)) {
    fs.unlinkSync(indexPath);
    console.log(
      chalk.cyan('[directory-exporter]'),
      chalk.yellow(`deleted '${indexPath}' as it's no longer needed.`)
    );
    return;
  }

  // 새로운 내용을 파일에 작성 (덮어쓰기)
  if (indexContent.length > 0) {
    fs.writeFileSync(indexPath, newIndexContent);
    console.log(
      chalk.cyan('[directory-exporter]'),
      chalk.green(`updated '${indexPath}'.`)
    );
  }
}

/**
 * 주어진 디렉터리에 대한 index.ts 파일을 재귀적으로 생성
 *
 * @param {DirectoryExportOptionsType} options - 설정 옵션들
 */
function recursivelyGenerateIndexFiles(options: DirectoryExportOptionsType) {
  const directoryPath = options.directoryPath;
  const indexContent = handleDirectoryContent(options);
  writeToIndexFile(directoryPath, indexContent);
}

// ====================================================================================
//                          Watcher Handling and Plugin Logic
// ====================================================================================

/**
 * 안전하게 주어진 옵션에 대한 index 파일들을 생성
 *
 * @param {DirectoryExportOptionsType} option - 설정 옵션
 * @param {object} event - 이벤트 정보
 */
function safeGenerateIndexFiles(option: DirectoryExportOptionsType) {
  try {
    const mergedOptions = { ...DEFAULT_OPTIONS, ...option };
    recursivelyGenerateIndexFiles(mergedOptions);
  } catch (error) {
    console.error(
      chalk.cyan('[directory-exporter]'),
      chalk.red(`Error generating index files: ${JSON.stringify(error)}`)
    );
  }
}

/**
 * 주어진 watcher에 필요한 이벤트 핸들러들을 연결
 *
 * @param {chokidar.FSWatcher} watcher - chokidar의 FSWatcher 객체
 * @param {Function} handler - 이벤트 핸들러 함수
 */
function attachWatcherHandlers(
  watcher: chokidar.FSWatcher,
  handler: () => void
) {
  watcher.on('add', handler);
  watcher.on('unlink', handler);
  watcher.on('rename', handler);
}

/**
 * Vite 플러그인의 main 함수
 *
 * @param {DirectoryExportOptionsType[]} options - 설정 옵션들의 배열
 * @returns {Plugin} - Vite 플러그인
 */
export default function directoryExportPlugin(
  options: Array<DirectoryExportOptionsType>
): Plugin {
  let watchers: Array<chokidar.FSWatcher> = [];

  return {
    name: 'directory-exporter',
    configResolved(config) {
      if (config.mode !== 'localhost') {
        return;
      }
      // localhost 모드일 때만 watcher 설정
      watchers = options.map((option) => {
        const watcher = chokidar.watch(option.directoryPath, {
          ignored: option.excludes,
        });

        const debouncedGenerate = debounce(
          () => safeGenerateIndexFiles(option),
          3000
        );
        attachWatcherHandlers(watcher, debouncedGenerate);

        return watcher;
      });
    },
    closeWatcher: () => watchers.forEach((watcher) => watcher.close()),
  };
}
