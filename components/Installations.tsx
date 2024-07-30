import defaultFormatterImg from '@/public/defaultFormatter.png'
import Image from 'next/image'
import React from 'react'

import Code from './Code'

const Installations = () => {
  return (
    <div className="flex flex-col gap-4" id="intro">
      <h2 className="my-8 text-2xl">• Let&apos;s start by creating a Next.js project:</h2>
      <Code>{`yarn create next-app --latest\n\nnpx create-next-app@latest\n\npnpx create-next-app@latest`}</Code>

      <p className="mt-4">
        Don’t forget to select “yes” when asked about integrating ESLint and Tailwind CSS during the creation of the
        Next.js project.
      </p>

      <h2 className="my-8 text-2xl">• Installing dependencies:</h2>
      <p>First, let&apos;s make sure you have the ESLint extension installed in your Visual Studio Code:</p>

      <p>
        <b>ESLint: </b>
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" className="underline">
          Link to the extension
        </a>{' '}
        - ESLint is a linting tool that helps identify and fix problems in your JavaScript code, following the rules
        defined in your configuration file.
      </p>
      <p>
        After installing the ESLint extension, make sure to configure Visual Studio Code to use ESLint as the default
        formatter. This ensures that the code is formatted correctly according to the rules defined in ESLint.
      </p>

      <Image
        src={defaultFormatterImg}
        alt="Default Formatter Location VsCode"
        className="w-100% my-4 h-auto rounded-3xl shadow-2xl duration-300 ease-in-out md:hover:scale-[180%]"
      />

      <h2 className="my-8 text-2xl" id="packs">
        • Now, let&apos;s install the dependencies:
      </h2>
      <Code>
        yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier
        eslint-plugin-import-helpers eslint-plugin-prettier prettier prettier-plugin-tailwindcss -D
      </Code>

      <h2 className="my-8 text-2xl">• Description of each package:</h2>
      <p>
        <b>@typescript-eslint/eslint-plugin:</b> This plugin extends ESLint functionalities to provide
        TypeScript-specific support, enabling error detection and linting rules application for TypeScript files.
      </p>
      <p>
        <b>@typescript-eslint/parser:</b> This package parses TypeScript code so that ESLint can understand and apply
        its rules correctly.
      </p>
      <p>
        <b>eslint-config-prettier:</b> This package disables all rules that are unnecessary or may conflict with
        Prettier, ensuring a smooth integration between ESLint and Prettier.
      </p>
      <p>
        <b>eslint-plugin-import-helpers:</b> This plugin offers rules and utilities to help organize imports in your
        JavaScript or TypeScript files.
      </p>
      <p>
        <b>eslint-plugin-prettier:</b> This plugin runs Prettier as an ESLint rule, allowing ESLint to format code using
        Prettier&apos;s settings.
      </p>
      <p>
        <b>prettier:</b> Prettier is a code formatting tool that maintains a consistent style throughout your project,
        avoiding debates about formatting styles.
      </p>
      <p>
        <b>prettier-plugin-tailwindcss:</b> This plugin allows Prettier to correctly format Tailwind CSS classes in your
        files, maintaining code consistency and readability.
      </p>
    </div>
  )
}

export default Installations
