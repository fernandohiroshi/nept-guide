import React from 'react'

interface CodeProps {
  children: string
}

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <div className="mx-[1rem] shadow-2xl">
      <div className="flex items-center gap-2 rounded-t-xl bg-[#5e5e5e] py-3 pl-4">
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#FF594C]" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#E7BE2B]" />
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#53C329]" />
      </div>
      <div className="flex h-auto max-w-full overflow-auto rounded-b-xl bg-black/40 px-4 py-8 text-xs md:text-sm">
        <pre className="whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  )
}

export default Code
