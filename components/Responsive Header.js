import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ResponsiveHeader = ({ activePage, language, handleChange }) => {
  const router = useRouter()
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='transition-custom w-full'>
      <div className='container'>
        <div className='flex items-center justify-between pt-6 pb-0'>
          <div className='flex items-center justify-center'>
            <div>
              <Link href='/' passHref>
                <a>
                  <img src='./images/logo.png' alt='' className='w-28' />
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-start'>
            <button
              className='px-0 py-0 text-accents_0 transition-all'
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
              >
                <title>menu-toggle</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
            <div
              className={
                showMenu
                  ? 'fixed top-0 left-[0%] bg-white w-80 md:w-96 h-screen z-50 transition-all duration-500'
                  : 'fixed top-0 -left-full bg-white w-0 h-screen z-50 transition-all duration-500'
              }
            >
              <div className='w-full flex flex-col'>
                <div className='flex items-start justify-between px-8 py-6 border-b border-accents_4'>
                  <Link href='/' passHref>
                    <a>
                      <img src='./images/logo.png' alt='' className='w-28' />
                    </a>
                  </Link>
                  <label
                    htmlFor='menu-toggle'
                    className='cursor-pointer transition-all'
                    onClick={() => setShowMenu(false)}
                  >
                    <svg className='text-accents_9' width='30' height='30' viewBox='0 0 20 20'>
                      <title>cancel-menu</title>
                      <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'></path>
                    </svg>
                  </label>
                </div>
                <nav className='flex items-center'>
                  <ul className='flex flex-col w-full'>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/' passHref>
                        <a
                          className={`text-accents_9
                            ${router.asPath === '/' ? 'text-accents_9' : 'hover:text-tertiary'}`}
                          onClick={() => setShowMenu(false)}
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/#about' passHref>
                        <a
                          className={`text-accents_9
                            ${
                              router.asPath === '/#about' ? 'text-accents_9' : 'hover:text-tertiary'
                            }`}
                          onClick={() => setShowMenu(false)}
                        >
                          About
                        </a>
                      </Link>
                    </li>

                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/#skills' passHref>
                        <a
                          className={`text-accents_9
                            ${
                              router.asPath === '/#skills'
                                ? 'text-accents_9'
                                : 'hover:text-tertiary'
                            }`}
                          onClick={() => setShowMenu(false)}
                        >
                          Skills
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/#my-projects' passHref>
                        <a
                          className={`text-accents_9
                            ${
                              router.asPath === '/#my-projects'
                                ? 'text-accents_9'
                                : 'hover:text-tertiary'
                            }`}
                          onClick={() => setShowMenu(false)}
                        >
                          Projects
                        </a>
                      </Link>
                    </li>
                    <li className='py-4 w-full border-b border-accents_4 px-5'>
                      <Link href='/#contact-us' passHref>
                        <a
                          className={`text-accents_9
                            ${
                              router.asPath === '/##contact-us'
                                ? 'text-accents_9'
                                : 'hover:text-tertiary'
                            }`}
                          onClick={() => setShowMenu(false)}
                        >
                          Contact Me
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='flex items-center mt-8 ml-5'>
                  <ul className='flex items-center text-accents_0'>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-[50%] flex items-center justify-center bg-tertiary hover:text-secondary'
                        href=''
                      >
                        <i className='flaticon-facebook'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-[50%] flex items-center justify-center bg-tertiary hover:text-secondary'
                        href='#'
                      >
                        <i className='flaticon-twitter'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-[50%] flex items-center justify-center bg-tertiary hover:text-secondary'
                        href=''
                      >
                        <i className='flaticon-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*<div className='col-4 flex items-center justify-end'></div>*/}
        </div>
      </div>
      <span className={showMenu ? 'body-overlay__black' : 'hidden'}></span>
    </header>
  )
}

export default ResponsiveHeader
