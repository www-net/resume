import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier"


export default [
  { plugins: { prettier: eslintPluginPrettier } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024
      }
    }
  },
  { ignores: ['node_modules', 'dists'] },
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js}'],
    rules: {
      ...eslintConfigPrettier.rules
    }
  }
];