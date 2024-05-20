import Link from 'next/link'
import { TbSquareRoundedArrowUpFilled } from 'react-icons/tb'

const ScrollButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-20 animate-pulse">
      <Link href="#">
        <TbSquareRoundedArrowUpFilled size={32} />
      </Link>
    </div>
  )
}

export default ScrollButtons
