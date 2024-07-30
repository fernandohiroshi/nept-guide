import VideoBox from './VideoBox'

const Intro = () => {
  return (
    <div>
      <h1 className="mb-16 text-center text-2xl font-medium md:text-7xl">
        Next.js with Prettier and Tailwind Sorter Integrated with ESLint
        <span className="inline-block animate-bounce text-[#c687fd]">.</span>
      </h1>
      <VideoBox />
      <p>
        In this guide, we present an initial setup aimed at beginners, focusing on the efficient integration of Next.js
        with Prettier, Tailwind Sorter, and ESLint. Although configurations may vary depending on each project or
        company, this guide serves as a starting point for those looking to optimize their front-end development
        workflow. Explore how these tools can be combined to enhance code quality and boost productivity.
      </p>
    </div>
  )
}

export default Intro
