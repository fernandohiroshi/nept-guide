import React from 'react'

const PluginsAndParserInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Plugins</h2>
      <p>
        A propriedade <b>&quot;plugins&quot;</b> especifica plugins adicionais a serem usados pelo ESLint.
      </p>
      <p>
        <b>&quot;@typescript-eslint&quot;</b>: Fornece regras específicas para TypeScript.
      </p>
      <p>
        <b>&quot;eslint-plugin-import-helpers&quot;</b>: Ajuda a organizar e ordenar importações de módulos.
      </p>

      <h2 className="my-8 text-2xl">• Parser</h2>
      <p>
        A propriedade <b>&quot;parser&quot;</b> define o parser a ser usado pelo ESLint.
      </p>
      <p>
        <b>&quot;@typescript-eslint/parser&quot;</b>: Permite que o ESLint entenda o código TypeScript.
      </p>

      <h2 className="my-8 text-2xl">• Opções do Parser</h2>
      <p>
        A propriedade <b>&quot;parserOptions&quot;</b> define configurações adicionais para o parser:
      </p>
      <p>
        <b>&quot;ecmaVersion&quot;</b>: 2021: Permite usar funcionalidades do ECMAScript 2021.
      </p>
      <p>
        <b>&quot;sourceType&quot;</b>: <b>&quot;module&quot;</b>: Indica que o código usa módulos ECMAScript.
      </p>
    </div>
  )
}

export default PluginsAndParserInfo
