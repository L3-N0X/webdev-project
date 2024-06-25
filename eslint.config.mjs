import globals from "globals";
import pluginJs from "@eslint/js";
import * as cssPlugin from "eslint-plugin-css";
import html from "@html-eslint/eslint-plugin";

export default [
    { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
    { languageOptions: { globals: globals.browser } },

    cssPlugin.configs["flat/recommended"],
    pluginJs.configs.recommended,
    {
        ...html.configs["flat/recommended"],
        files: ["**/*.html"],
        rules: {
            ...html.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
            "@html-eslint/indent": "error",
            "@html-eslint/no-inline-styles": "error",
            "@html-eslint/no-multiple-h1": "error",
            "@html-eslint/require-img-alt": "error",
            "@html-eslint/require-closing-tags": ["error", { selfClosing: "always" }],
            "@html-eslint/no-extra-spacing-attrs": ["error", { enforceBeforeSelfClose: true }],
            "@html-eslint/no-duplicate-attrs": "error",
            "@html-eslint/no-duplicate-id": "error",
            "@html-eslint/require-doctype": "error",
            "@html-eslint/require-li-container": "error",
            "@html-eslint/require-lang": "error",
            "@html-eslint/quotes": "error",
            "@html-eslint/require-title": "error",
            "@html-eslint/attrs-newline": "off",
        },
    },
];
