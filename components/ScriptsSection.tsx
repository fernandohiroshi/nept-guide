import React from 'react'

import Code from './Code'

const ScriptSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl" id="scripts">
        • Adding Scripts
      </h2>
      <p>
        Add these scripts to <b>package.json</b>
      </p>
      <Code>
        {`"scripts": {
            "eslintformat": "eslint --fix .",
            "prettierformat": "prettier --write .",
            "prettiercheck": "prettier --check ."
            }`}
      </Code>
      <h2 className="my-8 text-2xl">• What Do the Scripts Do?</h2>
      <p>
        <b>eslintformat:</b> eslint --fix .
        <br />
        Runs ESLint with the <b>--fix</b> option on all files (<b>.</b>) in the project. This automatically fixes issues
        that can be resolved by ESLint.
      </p>
      <p>
        <b>prettierformat:</b> prettier --write .
        <br />
        Runs Prettier with the <b>--write</b> option on all files (<b>.</b>) in the project. This reformats the code
        according to Prettier&apos;s settings and saves the changes.
      </p>
      <p>
        <b>prettiercheck:</b> prettier --check .
        <br />
        Runs Prettier with the <b>--check</b> option on all files (<b>.</b>) in the project. This checks if the files
        are formatted correctly without modifying anything. It is useful for use in CI/CD pipelines to ensure the code
        is correctly formatted.
      </p>
      <h2 className="my-8 text-2xl">• Conclusion</h2>
      <p>
        In this guide, we showed how to set up a Next.js project with Prettier, Tailwind Sorter, and ESLint, providing a
        solid foundation for beginners. Integrating these tools helps improve code quality and team productivity by
        automating formatting and error checking.
      </p>

      <h2 className="my-8 text-2xl">• Formatting Commands</h2>
      <p>To format the code, use the following commands in the terminal:</p>

      <Code>
        {`yarn prettierformat // To format

yarn prettiercheck // To check if the files are formatted or if there were any issues
      `}
      </Code>

      <p>
        Additionally, you can automatically format the code on save (<kbd>Ctrl + S</kbd>) in Visual Studio Code,
        ensuring that the code is always consistent and well-formatted.
      </p>
    </div>
  )
}

export default ScriptSection
