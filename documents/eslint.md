# ESLint Rules Settings

## Recommends

* `eslint:recommended`: ESLint에서 권장하는 기본 규칙이 적용되어 있습니다.
* `plugin:react/recommended`: React 프로젝트에 권장되는 ESLint 규칙이 적용되어 있습니다.
* `plugin:@typescript-eslint/recommended`: TypeScript 코드에 권장되는 ESLint 규칙이 적용되어 있습니다.
* `plugin:@typescript-eslint/recommended-requiring-type-checking`: 타입 체크를 필요로 하는 TypeScript 코드에 대한 추가적인 권장 규칙이 적용되어 있습니다. 이 설정은 더 엄격한 타입 검사를 통해 코드의 안정성을 높이는 데 도움이 됩니다.
* `plugin:prettier/recommended`: Prettier와 ESLint를 함께 사용할 때 권장되는 설정이 적용되어 있습니다.
* `plugin:import/recommended`: 모듈 import와 export에 대한 권장 ESLint 규칙이 적용되어 있습니다.

```json
"extends": [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:@typescript-eslint/recommended-requiring-type-checking",
  "plugin:prettier/recommended",
  "plugin:import/recommended",
],
```

## ETC Rules

* `import/no-named-as-default`: 기본적으로 export된 항목을 원래 이름과 다른 이름으로 import하는 것을 비활성화하고, 기본 export된 항목을 다른 이름으로 재정의하여 사용할 수 있도록 합니다..
* `import/order`: import 문의 순서를 type, builtin, external, internal, parent, sibling, index 순으로 정렬하도록 강제합니다. 알파벳 오름차순 정렬을 적용합니다.
* `no-unused-vars`: 사용되지 않는 변수를 금지합니다. 매개변수 중 마지막으로 사용된 인수 이전에 사용되지 않은 인수는 이 규칙에서 제외됩니다.
* `prettier/prettier`: Prettier 설정에 따라 코드 포맷팅을 강제합니다. 이 규칙은 `.prettierrc` 파일의 설정을 따릅니다.
* `react/jsx-handler-names`: 이벤트 핸들러의 이름에 `on` 또는 `handle` 접두사를 사용하도록 강제합니다.
* `react/jsx-sort-props`: 컴포넌트의 props를 알파벳 순으로 정렬하도록 강제합니다. 함수와 멀티라인 props는 마지막에 위치하도록 설정됩니다.
* `react/react-in-jsx-scope`: React 17 이상에서는 JSX를 사용할 때 React를 명시적으로 import할 필요가 없습니다. 이 규칙을 비활성화함으로써, 불필요한 React import를 제거할 수 있습니다.
* `@stylistic/js/comma-dangle`: 다중 라인에서 쉼표 뒤에 항상 쉼표를 붙이도록 강제합니다.
* `@stylistic/js/object-curly-spacing`: 객체 리터럴의 중괄호 안에 항상 공백을 넣도록 강제합니다.
* `@stylistic/js/quotes`: 문자열을 작성할 때 단일 따옴표를 사용하도록 강제합니다. 템플릿 리터럴은 허용됩니다.
* `@stylistic/js/space-before-blocks`: 블록(`{}`) 전에 항상 공백을 넣도록 강제합니다.
* `@stylistic/js/space-before-function-paren`: 함수 괄호 전에 공백을 넣도록 강제합니다. 익명 함수와 화살표 함수는 항상 공백을 넣고, 명명된 함수는 공백을 넣지 않습니다.
* `@typescript-eslint/array-type`: 배열 타입을 사용할 때 일반적인 배열 표기법(`Array<type>`)을 사용하도록 강제합니다.
* `@typescript-eslint/consistent-type-imports`: 타입 임포트를 일관되게 사용하도록 강제합니다.
* `@typescript-eslint/naming-convention`: 변수, 함수, 클래스 등의 이름을 지정할 때 특정 규칙을 따르도록 강제합니다. 예를 들어, 불리언 변수는 'is', 'should', 'has' 등으로 시작해야 합니다.
* `@typescript-eslint/no-explicit-any`: `any` 타입의 사용을 금지합니다.
* `@typescript-eslint/no-floating-promises`: 처리되지 않은 프로미스를 금지합니다.
* `@typescript-eslint/no-misused-promises`: 프로미스를 잘못 사용하는 것을 금지합니다. 예를 들어, `void` 반환 함수에서 프로미스를 반환하지 않도록 합니다.
* `@typescript-eslint/no-non-null-asserted-nullish-coalescing`: 널 병합 연산자(`??`) 사용 시 non-null 단언(`!`)을 사용하지 못하도록 합니다.
* `@typescript-eslint/no-unsafe-argument`: 타입 안전성이 검증되지 않은 인수의 사용을 금지합니다.
* `@typescript-eslint/no-unsafe-assignment`: 타입 안전성이 검증되지 않은 할당을 금지합니다.
* `@typescript-eslint/no-unsafe-member-access`: 타입 안전성이 검증되지 않은 객체 멤버 접근을 금지합니다.
* `@typescript-eslint/no-unsafe-return`: 타입 안전성이 검증되지 않은 값을 반환하는 것을 금지합니다.
* `@typescript-eslint/no-unused-vars`: 사용되지 않는 변수를 금지합니다.
* `@typescript-eslint/no-useless-empty-export`: 내용이 없는 불필요한 export를 금지합니다.
* `@typescript-eslint/prefer-optional-chain`: Optional Chaining을 선호하도록 강제합니다.
* `@typescript-eslint/type-annotation-spacing`: 타입 주석과 값 사이에 적절한 공백을 넣도록 강제합니다.

```json
"rules": {
  "import/no-named-as-default": "off",
  "import/order": [
    "error",
    {
      "groups": [
        "type",
        "builtin",
        "external",
        "internal",
        [
          "parent",
          "sibling"
        ],
        "index"
      ],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      },
      "newlines-between": "always"
    }
  ],
  "no-unused-vars": [
    "error",
    {
      "vars": "all",
      "args": "after-used",
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": false
    }
  ],
  "prettier/prettier": "error",
  "react/jsx-handler-names": [
    "error",
    {
      "eventHandlerPrefix": "on|handle",
      "eventHandlerPropPrefix": "on"
    }
  ],
  "react/jsx-sort-props": [
    "error",
    {
      "callbacksLast": true,
      "ignoreCase": true,
      "multiline": "last",
      "reservedFirst": [
        "key"
      ],
      "shorthandFirst": true
    }
  ],
  "react/react-in-jsx-scope": "off",
  "@stylistic/js/comma-dangle": [
    "error",
    "only-multiline"
  ],
  "@stylistic/js/object-curly-spacing": [
    "error",
    "always"
  ],
  "@stylistic/js/quotes": [
    "error",
    "single",
    {
      "allowTemplateLiterals": true
    }
  ],
  "@stylistic/js/space-before-blocks": [
    "error"
  ],
  "@stylistic/js/space-before-function-paren": [
    "error",
    {
      "anonymous": "always",
      "asyncArrow": "always",
      "named": "never"
    }
  ],
  "@typescript-eslint/array-type": [
    "error",
    {
      "default": "generic"
    }
  ],
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": [
        "variable"
      ],
      "types": [
        "boolean"
      ],
      "format": [
        "PascalCase"
      ],
      "prefix": [
        "is",
        "should",
        "has",
        "can",
        "did",
        "will"
      ]
    },
    {
      "selector": [
        "parameter"
      ],
      "leadingUnderscore": "allow",
      "format": [
        "camelCase",
        "snake_case"
      ]
    },
    {
      "selector": [
        "function",
        "variable"
      ],
      "format": [
        "camelCase",
        "PascalCase",
        "UPPER_CASE"
      ]
    },
    {
      "selector": [
        "variable"
      ],
      "modifiers": [
        "destructured"
      ],
      "format": null
    },
    {
      "selector": [
        "typeLike"
      ],
      "format": [
        "PascalCase"
      ],
      "custom": {
        "regex": "ImportMetaEnv|T|Props$",
        "match": true
      }
    },
    {
      "selector": [
        "class"
      ],
      "format": [
        "PascalCase"
      ]
    }
  ],
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      "checksVoidReturn": false
    }
  ],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unused-vars": [
    "error"
  ],
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/type-annotation-spacing": [
    "error",
    {
      "before": false,
      "after": true,
      "overrides": {
        "arrow": {
          "before": true,
          "after": true
        }
      }
    }
  ]
},
```

## Reference

* https://github.com/jsx-eslint/eslint-plugin-react
* https://eslint.org/docs/latest/rules/
* https://github.com/jsx-eslint/eslint-plugin-react/tree/master
* https://github.com/import-js/eslint-plugin-import/tree/main
* https://github.com/prettier/eslint-config-prettier
* https://github.com/prettier/eslint-plugin-prettier
* https://github.com/import-js/eslint-plugin-import
