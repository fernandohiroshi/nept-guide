import Code from '../Code'
import ExtensoesInfo from './extensoes-info'
import PluginsAndParserInfo from './plugins-parser-info'
import RegrasInfo from './regras-info'

const EslintSection = () => {
  return (
    <>
      <h2 className="my-8 text-2xl" id="configuracoes-eslint-prettier">
        • Configurando o arquivo: &quot;eslintrc.json&quot;
      </h2>
      <p className="mb-8">
        Este código é uma configuração do ESLint, um linter para JavaScript e TypeScript, que ajuda a identificar e
        corrigir problemas no código.
      </p>
      <Code>
        {`{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "eslint-plugin-import-helpers"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          ["module", "/^next/"],
          "/^@/styles/",
          "/^@/components/",
          "/@/lib/",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  }
}
`}
      </Code>
      <ExtensoesInfo />
      <PluginsAndParserInfo />
      <RegrasInfo />
    </>
  )
}

export default EslintSection
