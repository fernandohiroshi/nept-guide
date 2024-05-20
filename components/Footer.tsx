import Link from 'next/link'
import React from 'react'
import { FaLinux } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-black/10 tracking-widest shadow-md shadow-white/10 md:mx-4 lg:rounded-full">
      <div className="mx-auto flex max-w-[800px] flex-col justify-between gap-16 px-8 py-16 md:flex-row">
        <ul className="flex flex-col gap-4 text-xs md:text-sm">
          <h3 className="z-20 text-2xl">Seções</h3>
          <li>
            <Link className="duration-300 ease-in-out hover:text-orange-400" href="/#inicio">
              <span>• Início</span>
            </Link>
          </li>
          <li>
            <Link className="duration-300 ease-in-out hover:text-orange-400" href="/#instalacao-de-dependencias">
              <span>• Instalação de Dependências</span>
            </Link>
          </li>
          <li>
            <Link className="duration-300 ease-in-out hover:text-orange-400" href="/#configuracoes-eslint-prettier">
              <span>• Configurações do ESLint e Prettier</span>
            </Link>
          </li>
          <li>
            <Link className="duration-300 ease-in-out hover:text-orange-400" href="/#scripts-comandos">
              <span>• Scripts e Comandos</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col justify-between gap-12 text-center md:gap-8">
          <li className="z-20 mx-auto w-full max-w-64 rounded-2xl border-2 bg-black/20 px-4 py-2 shadow-white duration-500 ease-in-out hover:bg-white/10">
            <Link href="#">
              <h3 className="text-2xl  ">Video Tutorial</h3>
            </Link>
          </li>

          <li className="flex justify-around">
            <a href="https://ubuntu.com/download/desktop" target="_blank">
              <FaLinux size={32} />
            </a>
            <a href="https://nextjs.org/" target="_blank" className="animate-spin">
              <SiNextdotjs size={32} />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              <RiTailwindCssFill size={32} />
            </a>
          </li>
          <li className="z-20 animate-pulse text-2xl underline">
            <Link
              className="duration-300 ease-in-out hover:text-orange-400 "
              href="https://fernandohiroshi.vercel.app/"
              target="_blank"
            >
              <h3>Fale comigo !</h3>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
