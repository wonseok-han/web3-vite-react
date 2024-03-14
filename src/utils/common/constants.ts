const {
  MODE = 'localhost',
  VITE_API_BASE_URL,
  VITE_API_POSTFIX_URL,
  VITE_RENDER_INDICATOR_USE,
} = import.meta.env;

export const CONFIG = {
  API_URL: `${VITE_API_BASE_URL}${VITE_API_POSTFIX_URL}`,
  MODE,
  RENDER_INDICATOR_USE: VITE_RENDER_INDICATOR_USE === 'on' ? true : false,
  DATE: {
    DEFAULT_FORMAT: 'YYYY-MM-DD',
    DATETIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  },
};
