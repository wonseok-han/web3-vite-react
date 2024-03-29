/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ImportMetaEnv {
  readonly VITE_PROJECT_ID: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_POSTFIX_URL: string;
  readonly VITE_RENDER_INDICATOR_USE: 'on' | 'off';
}
