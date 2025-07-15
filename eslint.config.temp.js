import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores([
    "out/**",
    "**/node_modules/**",
    "webview-ui/dist/**",
    "webview-ui/build/**",
    "**/*.d.ts",
    ".vscode-test/**",
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["src/webview-ui/**/*.{ts,tsx,js,jsx}"],
    extends: [
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["src/**/*.{ts}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },
]);
