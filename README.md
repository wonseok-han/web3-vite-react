# Web3 Wallet Connect 통합 모듈

* **Wagmi**에서 제공하는 라이브러리를 이용해 Wallet Connect 연동.
* web3-react 적용해 지갑을 연동하는 통합 모듈 개인 프로젝트

## 개발 환경

* **NodeJS:** `v20.11.0` (LTS)
* **PackageManager:** `npm`

## 개발 도구 설정

### VSCode

프로젝트에서 개발자들의 일관된 개발 환경을 위해 VSCode 사용시 하기 명시된 코드 규칙을 적용합니다.

* **권장 확장 플러그인**: **[내용 참고](./documents/vscode.extensions.md)**
* **Settings**: **[내용 참고](./documents/vscode.settings.md)**

## Custom Plugin

### directory-exporter-plugin

* **핵심 코드**: **[plugins/directory-exporter-plugin.ts](/plugins/directory-exporter-plugin.ts)**

`src/assets/img` 경로와 `src/components` 경로에 **named-export**를 적용할 수 있도록 index.ts 파일을 자동 생성하도록 플러그인을 적용합니다.

이미지와 컴포넌트를 더욱 효율적으로 import 하여 개발 경험을 더욱 향상시킬 수 있도록 합니다.

컴포넌트는 **named-export**를 적용해 커스텀한 명칭으로 alias를 적용할 수도 있습니다.

```ts
// default export
// 해당 방식은 import 라인이 늘어날 뿐 아니라 alias 적용에도 번거로움이 있습니다.
import HomeButton from '@components/HomeButton';
import Loading from '@components/Loading';
import Tabs from '@components/Tabs';

const AliasLoading = Loading;
```

```ts
// named export
// 해당 방식은 performance 측면에서는 차이가 없을지 모르나 불필요한 import 라인 수를 줄이고 alias 적용을 더욱 간략하게 할 수 있습니다.
import { HomeButton, Loading as AliasLoading, Tabs } from '@components';
```

```ts
// vite.config.ts
directoryExporter([
  {
    directoryPath: 'src/assets/img',
    fileExtensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico'],
    namingConvention: 'camel',
  },
  {
    directoryPath: 'src/components',
    fileExtensions: ['.tsx'],
    exportType: 'default_to_named',
    isOmitExtension: true,
  },
])
```

```bash
# 적용된 라이브러리
npm install lodash
npm install --save-dev @types/lodash chokidar minimatch
```

## 코드 컨벤션

프로젝트에서 개발자들의 일관된 개발 환경을 위해 하기 명시된 코드 규칙을 적용합니다.

VSCode 사용자는 반드시 일관된 개발 환경을 위해 상기 명시된 `확장 플러그인`을 설치해주세요.

* **Prettier**: **[내용 참고](./documents/prettier.md)**
* **ESLint**: **[내용 참고](./documents/eslint.md)**

**<p style="color: tomato;">아래의 기본 규칙을 숙지하고 개발해주세요.</p>**

```plaintext
1. 컴포넌트를 생성할 때 파일명 또는 폴더명은 반드시 PascalCase로 작성되어야 합니다.
ex) 파일을 Component.tsx, CustomComponent.tsx와 같이 생성.
    컴포넌트 명을 생성한 파일명 또는 폴더명과 일치하는 Component CustomComponent와 같이 작성.

2. 모든 변수명은 기본적으로 camelCase를 유지하도록 합니다.
ex) let colorText = 'red';

3. 절대 값이 변하지 않는 상수명은 기본적으로 UPPER_CASE를 유지하도록 합니다.
ex) const COLOR_TEXT = 'red';

4. 모든 변수, 상수명에 a, b, c와 같이 의미 없는 이름이 아닌 의미있는 이름을 지어주도록 합니다.
ex) let isOpen

5. 함수 정의시 가능한 Arrow Function 형태로 작성하도록 합니다.
ex) const handleClick = () => {}

6. 컴포넌트 생성시 가능한 해당 부분만 재사용 가능하도록 코드를 분리해서 작성하도록 합니다.
```

### husky

`git commit`시 커밋 전에 **tsc, eslint, prettier** 검사를 진행합니다.

```bash
# pre-commit

#!/usr/bin/env sh
. "${0%/*}/h"

npx tsc --noEmit --skipLibCheck

npx lint-staged
```

```json
"lint-staged": {
  "./src/**/*.{js,jsx,ts,tsx}": [
    "eslint ./src --ext ts,tsx",
    "prettier -w ./src/**/*.(js|jsx|ts|tsx)"
  ]
}
```

## Getting Started

### 환경변수

`.env.example` 파일을 참조해 파일을 생성하도록 합니다.

* **.env.localhost**
* **.env.development**
* **.env.production**

### 실행

```bash
# Module Install
npm install

# Server start
npm run dev
```

## Reference

* **web3-react**
  - https://github.com/Uniswap/examples

* **Wagmi**
  - https://docs.walletconnect.com/getting-started
  - https://wagmi.sh/react/getting-started
