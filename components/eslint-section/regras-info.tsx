import React from 'react'

const RegrasInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Regras</h2>
      <p>
        A propriedade <b>&quot;rules&quot;</b> define regras específicas para o ESLint.
      </p>
      <p>
        <b>&quot;@typescript-eslint/no-explicit-any&quot;: &quot;off&quot;</b>: Desativa a regra que proíbe o uso do
        tipo any em TypeScript.
      </p>
      <p>
        <b>&quot;import-helpers/order-imports&quot;:</b> Define regras para a organização das importações.
      </p>
      <p>
        <b>&quot;warn&quot;:</b> Emite um aviso se a regra não for seguida.
      </p>
      <p>
        <b>&quot;newlinesBetween&quot;: &quot;always&quot;</b>: Exige que haja uma linha em branco entre grupos de
        importações.
      </p>
      <p>
        <b>&quot;groups&quot;:</b> Especifica a ordem dos grupos de importação:
      </p>
      <p>
        <b>[&quot;/^next/&quot;, &quot;module&quot;]</b>: Primeiro, importações do Next.js e módulos externos.
      </p>
      <p>
        <b>&quot;/^@/styles/&quot;</b>: Depois, importações de estilos.
      </p>
      <p>
        <b>&quot;/^@/components/&quot;</b>: Em seguida, importações de componentes.
      </p>
      <p>
        <b>&quot;/@/lib/&quot;</b>: Depois, importações de bibliotecas locais.
      </p>
      <p>
        <b>[&quot;parent&quot;, &quot;sibling&quot;, &quot;index&quot;]</b>: Finalmente, importações de arquivos no
        mesmo diretório ou diretórios pai.
      </p>
      <p>
        <b>&quot;alphabetize&quot;:</b> Especifica que as importações dentro dos grupos devem ser ordenadas
        alfabeticamente, ignorando maiúsculas e minúsculas.
      </p>
      <p>
        Em resumo, este arquivo de configuração ESLint define um conjunto de regras e padrões para garantir a qualidade
        e a consistência do código em um projeto Next.js usando TypeScript. Ele integra ferramentas como Prettier para
        formatação automática e organiza as importações de maneira sistemática.
      </p>
    </div>
  )
}

export default RegrasInfo
