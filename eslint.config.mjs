import eslint from "@eslint/js";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // Tambahkan rule custom kalau mau
    },
  },
];
