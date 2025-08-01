import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex items-baseline justify-between py-4'>
      <div className='relative w-36 h-[59px]'>
        <Image src='/images/logo.png' alt='Mustafa Masoudi' layout='fill' objectFit='contain' />
      </div>
      <ul className='flex items-center justify-center'>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>
          <Link href='/' passHref>
            <a>home</a>
          </Link>
        </li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>
          <Link href='/#about' passHref>
            <a>about</a>
          </Link>
        </li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>
          <Link href='/#skills' passHref>
            <a>skills</a>
          </Link>
        </li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>
          <Link href='/#my-projects' passHref>
            <a>projects</a>
          </Link>
        </li>
        <li className='text-base font-medium capitalize mr-12 last:mr-0'>
          <Link href='/#contact-us' passHref>
            <a>contact me</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Header
