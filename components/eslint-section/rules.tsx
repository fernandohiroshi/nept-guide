import React from 'react'

const Rules = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="my-8 text-2xl">• Rules</h2>
      <p>
        The <b>&quot;rules&quot;</b> property defines specific rules for ESLint.
      </p>
      <p>
        <b>&quot;@typescript-eslint/no-explicit-any&quot;: &quot;off&quot;</b>: Disables the rule that prohibits the use
        of the <i>any</i> type in TypeScript.
      </p>
      <p>
        <b>&quot;import-helpers/order-imports&quot;:</b> Defines rules for organizing imports.
      </p>
      <p>
        <b>&quot;warn&quot;:</b> Issues a warning if the rule is not followed.
      </p>
      <p>
        <b>&quot;newlinesBetween&quot;: &quot;always&quot;</b>: Requires a blank line between groups of imports.
      </p>
      <p>
        <b>&quot;groups&quot;:</b> Specifies the order of import groups:
      </p>
      <p>
        <b>[&quot;/^next/&quot;, &quot;module&quot;]</b>: First, imports from Next.js and external modules.
      </p>
      <p>
        <b>&quot;/^@/styles/&quot;</b>: Next, style imports.
      </p>
      <p>
        <b>&quot;/^@/components/&quot;</b>: Then, component imports.
      </p>
      <p>
        <b>&quot;/@/lib/&quot;</b>: After that, local library imports.
      </p>
      <p>
        <b>[&quot;parent&quot;, &quot;sibling&quot;, &quot;index&quot;]</b>: Finally, imports from files in the same
        directory or parent directories.
      </p>
      <p>
        <b>&quot;alphabetize&quot;:</b> Specifies that imports within groups should be sorted alphabetically, ignoring
        case.
      </p>
      <p>
        In summary, this ESLint configuration file defines a set of rules and standards to ensure code quality and
        consistency in a Next.js project using TypeScript. It integrates tools like Prettier for automatic formatting
        and systematically organizes imports.
      </p>
    </div>
  )
}

export default Rules
