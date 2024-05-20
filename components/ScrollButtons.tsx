import Link from 'next/link'
import { TbSquareRoundedArrowUpFilled } from 'react-icons/tb'
import { TbSquareRoundedArrowDownFilled } from 'react-icons/tb'

const ScrollButtons = () => {
  return (
    <div className="fixed right-4 top-0 z-20 flex h-full flex-col items-center  justify-center gap-2 text-white">
      <Link href="#">
        <TbSquareRoundedArrowUpFilled className="opacity-20 duration-300 ease-in-out hover:opacity-80" size={40} />
      </Link>
      <Link href="/#contato">
        <TbSquareRoundedArrowDownFilled className="opacity-20 duration-300 ease-in-out hover:opacity-80" size={40} />
      </Link>
    </div>
  )
}

export default ScrollButtons
