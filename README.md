# Web3 Wallet Connect 통합 모듈

* web3-react 적용해 지갑을 연동하는 통합 모듈 개인 프로젝트

## 개발 환경

* **NodeJS:** `v20.11.0` (LTS)
* **PackageManager:** `npm`

## 개발 도구 설정

### VSCode

프로젝트에서 개발자들의 일관된 개발 환경을 위해 VSCode 사용시 하기 명시된 코드 규칙을 적용합니다.

* **권장 확장 플러그인**: **[내용 참고](./documents/vscode.extensions.md)**
* **Settings**: **[내용 참고](./documents/vscode.settings.md)**

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

```bash
# Module Install
npm install

# Serer start
npm run dev
```

## Reference

* https://github.com/Uniswap/examples
