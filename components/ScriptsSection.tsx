import React from 'react'

import Code from './Code'

const ScriptSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl" id="scripts-comandos">
        • Adicionando os Scripts
      </h2>
      <p>
        Coloque esses scripts no <b>package.json</b>
      </p>
      <Code>
        {`"scripts": {
            "eslintformat": "eslint --fix .",
            "prettierformat": "prettier --write .",
            "prettiercheck": "prettier --check ."
            }`}
      </Code>
      <h2 className="my-8 text-2xl">• O que os Scripts fazem?</h2>
      <p>
        <b>eslintformat:</b> eslint --fix .
        <br />
        Executa o ESLint com a opção <b>--fix</b> em todos os arquivos (<b>.</b>) do projeto. Isso automaticamente
        corrige problemas que podem ser resolvidos pelo ESLint.
      </p>
      <p>
        <b>prettierformat:</b> prettier --write .
        <br />
        Executa o Prettier com a opção <b>--write</b> em todos os arquivos (<b>.</b>) do projeto. Isso reformata o
        código de acordo com as configurações do Prettier e salva as alterações.
      </p>
      <p>
        <b>prettiercheck:</b> prettier --check .
        <br />
        Executa o Prettier com a opção <b>--check</b> em todos os arquivos (<b>.</b>) do projeto. Isso verifica se os
        arquivos estão formatados corretamente sem modificar nada. É útil para uso em pipelines de CI/CD para garantir
        que o código está formatado corretamente.
      </p>
      <h2 className="my-8 text-2xl">• Conclusão</h2>
      <p>
        Neste guia, mostramos como configurar um projeto Next.js com Prettier, Tailwind Sorter e ESLint, proporcionando
        uma base sólida para iniciantes. A integração dessas ferramentas ajuda a melhorar a qualidade do código e a
        produtividade da equipe, automatizando a formatação e a verificação de erros.
      </p>

      <h2 className="my-8 text-2xl">• Comandos para Formatação</h2>
      <p>Para formatar o código, utilize os seguintes comandos no terminal:</p>

      <Code>
        {`yarn prettierformat // Para formatar

yarn prettiercheck // Para verificar se os arquivos foram formatados ou se teve algum problema
      `}
      </Code>

      <p>
        Além disso, é possível formatar o código automaticamente ao salvar (<kbd>Ctrl + S</kbd>) no Visual Studio Code,
        garantindo que o código esteja sempre consistente e bem formatado.
      </p>
    </div>
  )
}

export default ScriptSection
