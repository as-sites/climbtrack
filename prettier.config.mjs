export default {
  semi: true,
  printWidth: 100,
  tabWidth: 4,
  useTabs: true,
  singleQuote: true,
  quoteProps: "as-needed",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: "always",
  overrides: [
    {
      files: [
        "*.cjs",
        "*.cts",
        "*.js",
        "*.jsx",
        "*.mjs",
        "*.mts",
        "*.ts",
        "*.tsx",
        "*.d.ts",
      ],
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
        tabWidth: 4,
        useTabs: true,
      },
    },
    {
      files: ["*.json5"],
      options: {
        parser: "json5",
        tabWidth: 4,
        useTabs: false,
      },
    },
    {
      files: ["*.jsonc"],
      options: {
        parser: "jsonc",
        tabWidth: 4,
        useTabs: false,
      },
    },
    {
      files: ["*.yml", "*.yaml"],
      options: {
        parser: "yaml",
        tabWidth: 2,
        useTabs: false,
      },
    },
  ],
};
