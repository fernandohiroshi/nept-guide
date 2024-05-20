import React from 'react'

const ExtensoesInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Extensões</h2>
      <p>
        A propriedade <b>&quot;extends&quot;</b> define uma lista de configurações de ESLint de terceiros que serão
        aplicadas.
      </p>
      <p>
        <b>&quot;next/core-web-vitals&quot;</b>: Conjunto de regras específicas para projetos Next.js, otimizando para
        as Web Vitals.
      </p>
      <p>
        <b>&quot;plugin:@typescript-eslint/recommended&quot;</b>: Regras recomendadas para projetos TypeScript,
        fornecidas pelo plugin @typescript-eslint.
      </p>
      <p>
        <b>&quot;plugin:prettier/recommended&quot;</b>: Integração com o Prettier para garantir que o código seja
        formatado de acordo com as regras do Prettier.
      </p>
      <p>
        <b>&quot;prettier&quot;</b>: Desativa regras de ESLint que possam conflitar com as regras de formatação do
        Prettier.
      </p>
    </div>
  )
}

export default ExtensoesInfo
