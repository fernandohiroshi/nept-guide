import React from 'react'

const ExtensoesInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Extensions</h2>
      <p>
        The <b>&quot;extends&quot;</b> property defines a list of third-party ESLint configurations that will be
        applied.
      </p>
      <p>
        <b>&quot;next/core-web-vitals&quot;</b>: A set of specific rules for Next.js projects, optimizing for Web
        Vitals.
      </p>
      <p>
        <b>&quot;plugin:@typescript-eslint/recommended&quot;</b>: Recommended rules for TypeScript projects provided by
        the @typescript-eslint plugin.
      </p>
      <p>
        <b>&quot;plugin:prettier/recommended&quot;</b>: Integration with Prettier to ensure the code is formatted
        according to Prettier rules.
      </p>
      <p>
        <b>&quot;prettier&quot;</b>: Disables ESLint rules that may conflict with Prettier&apos;s formatting rules.
      </p>
    </div>
  )
}

export default ExtensoesInfo
