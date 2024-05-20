import VideoBox from './VideoBox'

const Intro = () => {
  return (
    <div>
      <h1 className="mb-16 text-center text-2xl font-medium -tracking-wider md:text-7xl">
        Next.js com Prettier e Tailwind Sorter Integrados ao ESLint{' '}
        <span className="inline-block animate-bounce text-[#c687fd]">.</span>
      </h1>
      <VideoBox />
      <p>
        Neste guia, apresentamos uma configuração inicial voltada para iniciantes, visando a integração eficiente de
        Next.js com Prettier, Tailwind Sorter e ESLint. Embora as configurações possam variar de acordo com cada projeto
        ou empresa, este guia serve como ponto de partida para quem busca otimizar seu fluxo de desenvolvimento
        front-end. Explore como essas ferramentas podem ser combinadas para melhorar a qualidade do código e aumentar a
        produtividade.
      </p>
    </div>
  )
}

export default Intro
