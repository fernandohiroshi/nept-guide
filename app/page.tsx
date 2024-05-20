'use client'

import Link from 'next/link'
import { TbSquareRoundedArrowUpFilled } from 'react-icons/tb'

import EslintSection from '@/components/eslint-section/EslintSection'
import Footer from '@/components/Footer'
import Installations from '@/components/Installations'
import Intro from '@/components/Intro'
import PrettierSection from '@/components/PrettierSction'
import ScriptSection from '@/components/ScriptsSection'

export default function Home() {
  return (
    <main id="home" className="scroll-mt-12">
      <div className="mx-auto mb-16 mt-16 max-w-[800px] px-4">
        <Intro />

        <Installations />
        <EslintSection />
        <PrettierSection />
        <ScriptSection />
      </div>
      <Footer />
      <Link href="/#home">
        <TbSquareRoundedArrowUpFilled className="fixed bottom-4 right-4 z-20 animate-pulse text-white" size={40} />
      </Link>
      <span className="mt-16 flex justify-center pb-14 text-center text-xs md:pb-4 md:text-sm">
        © 2024 Fernando Hiroshi Dev. Todos os direitos reservados.
      </span>
    </main>
  )
}
