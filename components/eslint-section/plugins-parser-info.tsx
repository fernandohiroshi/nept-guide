import React from 'react'

const PluginsAndParserInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Plugins</h2>
      <p>
        The <b>&quot;plugins&quot;</b> property specifies additional plugins to be used by ESLint.
      </p>
      <p>
        <b>&quot;@typescript-eslint&quot;</b>: Provides specific rules for TypeScript.
      </p>
      <p>
        <b>&quot;eslint-plugin-import-helpers&quot;</b>: Helps organize and sort module imports.
      </p>

      <h2 className="my-8 text-2xl">• Parser</h2>
      <p>
        The <b>&quot;parser&quot;</b> property defines the parser to be used by ESLint.
      </p>
      <p>
        <b>&quot;@typescript-eslint/parser&quot;</b>: Allows ESLint to understand TypeScript code.
      </p>

      <h2 className="my-8 text-2xl">• Parser Options</h2>
      <p>
        The <b>&quot;parserOptions&quot;</b> property defines additional settings for the parser:
      </p>
      <p>
        <b>&quot;ecmaVersion&quot;</b>: 2021: Allows the use of ECMAScript 2021 features.
      </p>
      <p>
        <b>&quot;sourceType&quot;</b>: <b>&quot;module&quot;</b>: Indicates that the code uses ECMAScript modules.
      </p>
    </div>
  )
}

export default PluginsAndParserInfo
