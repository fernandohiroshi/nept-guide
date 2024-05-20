import React from 'react'

import Code from './Code'

const PrettierSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Configurando os Arquivos Prettier</h2>
      <p>
        Crie o arquivo: <b>.prettierrc.json</b>
      </p>
      <p>
        Este arquivo define as configurações do Prettier para garantir que o código seja formatado de maneira
        consistente. Veja o conteúdo e uma descrição detalhada:
      </p>
      <Code>
        {`{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["clsx", "cn", "twMerge"]
}`}
      </Code>
      <p>
        <b>semi:</b> Define se o Prettier deve adicionar ponto e vírgula ao final de cada linha. O valor <b>false</b>{' '}
        indica que não deve adicionar ponto e vírgula.
      </p>
      <p>
        <b>singleQuote:</b> Define se o Prettier deve usar aspas simples em vez de aspas duplas para strings. O valor{' '}
        <b>true</b> indica que deve usar aspas simples.
      </p>
      <p>
        <b>trailingComma:</b> Define como as vírgulas finais devem ser usadas. O valor <b>all</b> indica que deve
        adicionar vírgulas finais em todos os lugares possíveis, incluindo objetos, arrays, etc.
      </p>
      <p>
        <b>printWidth:</b> Define a largura máxima de cada linha de código antes de ser quebrada. O valor <b>120</b>{' '}
        indica que a linha deve ter, no máximo, 120 caracteres.
      </p>
      <p>
        <b>tabWidth:</b> Define o número de espaços usados para a indentação. O valor <b>2</b> indica que cada nível de
        indentação deve ter 2 espaços.
      </p>
      <p>
        <b>plugins:</b> Especifica plugins adicionais para o Prettier. Aqui, é utilizado o{' '}
        <b>prettier-plugin-tailwindcss</b>, que ajuda a ordenar classes do Tailwind CSS automaticamente.
      </p>
      <p>
        <b>tailwindFunctions:</b> Lista funções que o Prettier deve reconhecer para formatação específica de classes do
        Tailwind. Inclui <b>clsx</b>, <b>cn</b> e <b>twMerge</b>.
      </p>

      <h2 className="my-8 text-2xl">• .prettierignore</h2>
      <p>
        O arquivo .prettierignore é utilizado para especificar arquivos e diretórios que devem ser ignorados pelo
        Prettier ao formatar o código. Veja o conteúdo e uma descrição detalhada:
      </p>
      <Code>
        {`.next
next-env.d.ts
node_modules
public
yarn.lock
package-lock.json`}
      </Code>
      <p>
        <b>.next:</b> Ignora o diretório .next, que é criado automaticamente pelo Next.js durante a construção do
        projeto e contém arquivos de build.
      </p>
      <p>
        <b>next-env.d.ts:</b> Ignora o arquivo next-env.d.ts, que é um arquivo de definição de tipos gerado pelo
        Next.js.
      </p>
      <p>
        <b>node_modules:</b> Ignora o diretório node_modules, que contém todas as dependências do projeto. Formatá-lo
        não é necessário e pode causar problemas.
      </p>
      <p>
        <b>public:</b> Ignora o diretório public, que geralmente contém recursos estáticos como imagens, fontes, etc.
      </p>
      <p>
        <b>yarn.lock:</b> Ignora o arquivo yarn.lock, que é gerado pelo gerenciador de pacotes Yarn e contém a árvore de
        dependências exata.
      </p>
      <p>
        <b>package-lock.json:</b> Ignora o arquivo package-lock.json, que é gerado pelo npm (outro gerenciador de
        pacotes) e também contém a árvore de dependências exata.
      </p>
    </div>
  )
}

export default PrettierSection
