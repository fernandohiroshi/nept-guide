'use client'

import EslintSection from '@/components/eslint-section/EslintSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Installations from '@/components/Installations'
import Intro from '@/components/Intro'
import PrettierSection from '@/components/PrettierSction'
import ScriptSection from '@/components/ScriptsSection'
import ScrollButtons from '@/components/ScrollButtons'

export default function Home() {
  return (
    <main id="home" className="scroll-mt-12">
      <Header />
      <div className="mx-auto mb-16 mt-8 max-w-[800px] px-4">
        <Intro />
        <Installations />
        <EslintSection />
        <PrettierSection />
        <ScriptSection />
      </div>
      <Footer />
      <ScrollButtons />
      <span className="mt-16 flex justify-center pb-14 text-center text-xs md:pb-4 md:text-sm">
        © 2024 Fernando Hiroshi Dev. All rights reserved.
      </span>
    </main>
  )
}
