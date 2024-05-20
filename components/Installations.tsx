import defaultFormatterImg from '@/public/defaultFormatter.png'
import Image from 'next/image'
import React from 'react'

import Code from './Code'

const Installations = () => {
  return (
    <div className="flex flex-col gap-4" id="inicio">
      <h2 className="my-8 text-2xl">• Vamos começar primeiro criando um projeto Next.js:</h2>
      <Code>{`yarn create next-app --latest\n\nnpx create-next-app@latest\n\npnpx create-next-app@latest`}</Code>

      <p className="mt-4">
        Não esqueça de selecionar &quot;yes&quot; ao ser perguntado sobre a integração do ESLint e Tailwind CSS durante
        a criação do projeto Next.js.
      </p>

      <h2 className="my-8 text-2xl">• Instalando as dependências:</h2>
      <p>Antes de tudo, vamos garantir que você tenha as extensões corretas instaladas no Visual Studio Code:</p>
      <p>
        1. <b>Prettier: </b>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          target="_blank"
          className="underline"
        >
          Link para a extensão
        </a>{' '}
        - O Prettier é uma ferramenta que formata automaticamente o seu código para seguir um estilo consistente,
        evitando discussões sobre formatação entre membros da equipe.
      </p>
      <p>
        2. <b>ESLint: </b>
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" className="underline">
          Link para a extensão
        </a>{' '}
        - O ESLint é uma ferramenta de linting que ajuda a identificar e corrigir problemas no seu código JavaScript,
        seguindo as regras definidas no seu arquivo de configuração.
      </p>
      <p>
        Após instalar essas extensões, certifique-se de configurar o Visual Studio Code para utilizar o ESLint como o
        formatador padrão. Isso garante que o código seja formatado corretamente de acordo com as regras definidas no
        ESLint.
      </p>

      <Image
        src={defaultFormatterImg}
        alt="Default Formatter Location VsCode"
        className="w-100% my-4 h-auto rounded-3xl shadow-2xl duration-300 ease-in-out md:hover:scale-[180%]"
      />

      <h2 className="my-8 text-2xl" id="instalacao-de-dependencias">
        • Agora, vamos instalar as dependências:
      </h2>
      <Code>
        yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier
        eslint-plugin-import-helpers eslint-plugin-prettier prettier prettier-plugin-tailwindcss -D
      </Code>

      <h2 className="my-8 text-2xl">• Descrição de cada pacote:</h2>
      <p>
        <b>@typescript-eslint/eslint-plugin:</b> Este plugin estende as funcionalidades do ESLint para fornecer suporte
        específico para TypeScript, permitindo a detecção de erros e a aplicação de regras de linting em arquivos
        TypeScript.
      </p>
      <p>
        <b>@typescript-eslint/parser:</b> Este pacote analisa o código TypeScript para que o ESLint possa entender e
        aplicar suas regras corretamente.
      </p>
      <p>
        <b>eslint-config-prettier:</b> Este pacote desativa todas as regras que são desnecessárias ou que podem entrar
        em conflito com o Prettier, garantindo uma integração suave entre o ESLint e o Prettier.
      </p>
      <p>
        <b>eslint-plugin-import-helpers:</b> Este plugin oferece algumas regras e utilitários para ajudar na organização
        de imports em seus arquivos JavaScript ou TypeScript.
      </p>
      <p>
        <b>eslint-plugin-prettier:</b> Este plugin executa o Prettier como uma regra do ESLint, permitindo que o ESLint
        formate o código utilizando as configurações do Prettier.
      </p>
      <p>
        <b>prettier:</b> O Prettier é uma ferramenta de formatação de código que mantém um estilo consistente em todo o
        seu projeto, evitando debates sobre estilos de formatação.
      </p>
      <p>
        <b>prettier-plugin-tailwindcss:</b> Este plugin permite que o Prettier formate corretamente as classes do
        Tailwind CSS em seus arquivos, mantendo a consistência e a legibilidade do código.
      </p>
    </div>
  )
}

export default Installations
