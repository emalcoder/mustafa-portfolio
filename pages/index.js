import React from 'react'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import Flip from 'react-reveal/Flip'
import Roll from 'react-reveal/Roll'
import Image from 'next/image'
import PureModal from 'react-pure-modal'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ResponsiveHeader from '../components/Responsive Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ParticlesComponents from '../components/Particles'
import { react } from '@babel/types'

export default function Home() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)
  const [open5, setOpen5] = React.useState(false)
  const [open6, setOpen6] = React.useState(false)
  const [open7, setOpen7] = React.useState(false)
  const [open8, setOpen8] = React.useState(false)
  const [open9, setOpen9] = React.useState(false)

  const modalRef = React.useRef(null)

  const onOpenModal1 = () => setOpen1(true)
  const onCloseModal1 = () => setOpen1(false)

  const onOpenModal2 = () => setOpen2(true)
  const onCloseModal2 = () => setOpen2(false)

  const onOpenModal3 = () => setOpen3(true)
  const onCloseModal3 = () => setOpen3(false)

  const onOpenModal4 = () => setOpen4(true)
  const onCloseModal4 = () => setOpen4(false)

  const onOpenModal5 = () => setOpen5(true)
  const onCloseModal5 = () => setOpen5(false)

  const onOpenModal6 = () => setOpen6(true)
  const onCloseModal6 = () => setOpen6(false)

  const onOpenModal7 = () => setOpen7(true)
  const onCloseModal7 = () => setOpen7(false)

  const onOpenModal8 = () => setOpen8(true)
  const onCloseModal8 = () => setOpen8(false)

  const onOpenModal9 = () => setOpen9(true)
  const onCloseModal9 = () => setOpen9(false)
  return (
    <>
      <ParticlesComponents />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='hidden lg:block'>
              <Header />
            </div>
            <div className='block lg:hidden'>
              <ResponsiveHeader />
            </div>
          </div>
        </div>
      </div>
      <section id='hero' className='mt-28 md:mt-60 mb-36 lg:mb-40 z-0 bg-transparent'>
        <div className='container min-h-full'>
          <div className='row'>
            <div className='col-12'>
              <div className='flex !flex-wrap md:!flex-nowrap items-center justify-between'>
                <div className='!order-2 md:!order-1 md:flex-1 lg:flex-auto'>
                  <Fade left>
                    <h1 className='pb-6'>
                      <span className='inline-block text-sm lg:text-base uppercase pb-4'>
                        hi there 👋 I&apos;m
                      </span>
                      <br />
                      <span className='inline-block text-3xl md:text-4xl lg:text-7xl font-bold font-palyfair capitalize pb-4'>
                        <span className='underline decoration-primary'>mustafa</span> masoudi
                      </span>
                      <br />
                      <span className='text-sm lg:text-base uppercase font-bold text-secondary'>
                        graphic designer + video editor 👨‍💻
                      </span>
                    </h1>
                  </Fade>
                  <Fade up>
                    <p className='pb-8 text-sm md:text-base lg:text-xl text-accents_5 font-semibold'>
                      A professional graphic designer and video editor with Creative, Focused,
                      Detail-oriented Design Professional with a strong work Ethic.
                    </p>
                  </Fade>
                </div>

  {/*<div className='!order-1 md:!order-2 md:flex-1 lg:flex-auto'>
                  <Fade right>
                    <Image
                      width='800px'
                      height='800px'
                      Layout='responsive'
                      src='/images/mustafa-img-tinified.png'
                      alt=''
                      className='w-[25rem] lg:w-[50rem]'
                    />
                  </Fade>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='bg-accents_8 pt-36 pb-16'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                <Bounce top>
                  <div className='my-4'>Who I am</div>
                  <div className='flex items-center justify-start mb-10 pr-16'>
                    <h2 className='text-2xl lg:text-3xl font-bold'>About me</h2>
                    <span className='flex-1 w-full h-px bg-secondary inline-block ml-3'></span>
                  </div>
                </Bounce>
                <Fade left>
                  <div>
                    <p className='pb-6'>
                      Dynamic and innovative professional with years of invaluable hands-on
                      experience in handling several simultaneous creative design projects, concept
                      creation, animation, video production and visual conceptualization. Equipped
                      with the ability to escalate brand awareness by utilizing skills gained in the
                      creative industry. Being able to identify opportunities, overcome objections
                      and build long-term mutually beneficial relationships with vendors, work force
                      and clients.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hidden lg:block relative h-[32rem]'>
                <Roll left>
                  <div className='px-2 py-2 absolute top-[4.5rem] left-[2rem]'>
                    <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                      <h5 className='text-xl text-accents_9'>Communication</h5>
                    </div>
                  </div>
                </Roll>
                <Roll top>
                  <div className='px-2 py-2 absolute top-0 left-[11rem]'>
                    <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                      <h5 className='text-xl text-accents_9'>Creativity</h5>
                    </div>
                  </div>
                </Roll>
                <Roll right>
                  <div className='px-2 py-2 absolute top-[4.5rem] left-[20rem]'>
                    <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                      <h5 className='text-xl text-accents_9'>Teamwork</h5>
                    </div>
                  </div>
                </Roll>
                <Roll left>
                  <div className='px-2 py-2 absolute top-[14rem] left-[2rem]'>
                    <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                      <h5 className='text-xl text-accents_9'>Organization</h5>
                    </div>
                  </div>
                </Roll>
                <Roll down>
                  <div className='px-2 py-2 absolute top-[19rem] left-[11rem]'>
                    <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                      <h5 className='text-xl text-accents_9'>Leadership</h5>
                    </div>
                  </div>
                </Roll>
                <Roll right>
                  <div className='px-2 py-2 absolute top-[14rem] left-[20rem]'>
                    <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                      <h5 className='text-xl text-accents_9'>TeamPlayer</h5>
                    </div>
                  </div>
                </Roll>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='skills' className='pt-36 pb-16'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-10 mx-auto'>
              <div className='text-center'>
                <Fade up>
                  <h2 className='text-2xl lg:text-5xl font-bold mb-10'>Professional Skills</h2>
                </Fade>
                <div className='w-full'>
                  <div className='pt-10 pb-4'>
                    <div className='flex !flex-wrap md:!flex-nowrap items-center mb-10 last:mb-0'>
                      <Fade left>
                        <p className='basis-full md:basis-2/12 text-left mr-4 md:mr-8 lg:mr-12 text-lg font-rubik font-medium'>
                          Photoshop
                        </p>
                      </Fade>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[90%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          90%
                        </div>
                      </div>
                    </div>
                    <div className='flex !flex-wrap md:!flex-nowrap items-center mb-10 last:mb-0'>
                      <Fade left>
                        <p className='basis-full md:basis-2/12 text-left mr-4 md:mr-8 lg:mr-12 text-lg font-rubik font-medium'>
                          Illustrator
                        </p>
                      </Fade>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[85%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          85%
                        </div>
                      </div>
                    </div>
                    <div className='flex !flex-wrap md:!flex-nowrap items-center mb-10 last:mb-0'>
                      <Fade left>
                        <p className='basis-full md:basis-2/12 text-left mr-4 md:mr-8 lg:mr-12 text-lg font-rubik font-medium'>
                          Premier Pro
                        </p>
                      </Fade>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[70%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          70%
                        </div>
                      </div>
                    </div>
                    <div className='flex !flex-wrap md:!flex-nowrap items-center mb-10 last:mb-0'>
                      <Fade left>
                        <p className='basis-full md:basis-2/12 text-left mr-4 md:mr-8 lg:mr-12 text-lg font-rubik font-medium'>
                          After Effects
                        </p>
                      </Fade>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[60%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          60%
                        </div>
                      </div>
                    </div>
                    <div className='flex !flex-wrap md:!flex-nowrap items-center mb-10 last:mb-0'>
                      <Fade left>
                        <p className='basis-full md:basis-2/12 text-left mr-4 md:mr-8 lg:mr-12 text-lg font-rubik font-medium'>
                          WordPress
                        </p>
                      </Fade>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[65%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          65%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-36 pb-16'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-10 mx-auto'>
              <div className='text-center'>
                <Fade up>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-24'>
                    Why should you hire me ?
                  </h2>
                </Fade>
              </div>
              <div className='row'>
                <div className='col-lg-3'>
                  <Fade up>
                    <div className='bg-accents_8 h-60 max-h-full flex items-center justify-start lg:justify-center px-4 py-6 rounded-md shadow-2xl mb-6 lg:mb-0'>
                      <div>
                        <img src='/images/creativity.png' alt='' />
                        <h3 className='mt-4 mb-2'>Creativity</h3>
                        <p>Unlimited flow of Ideas and an out of box Mind</p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='col-lg-3'>
                  <Fade up>
                    <div className='bg-accents_8 h-60 max-h-full flex items-center justify-start lg:justify-center px-4 py-6 rounded-md shadow-2xl mb-6 lg:mb-0'>
                      <div>
                        <img src='/images/punctuality.png' alt='' />
                        <h3 className='mt-4 mb-2'>Punctuality</h3>
                        <p>Always get your work done on time, or even before the deadline</p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='col-lg-3'>
                  <Fade up>
                    <div className='bg-accents_8 h-60 max-h-full flex items-center justify-start lg:justify-center px-4 py-6 rounded-md shadow-2xl mb-6 lg:mb-0'>
                      <div>
                        <img src='/images/payment-rate.png' alt='' />
                        <h3 className='mt-4 mb-2'>Perfect Payment Rate</h3>
                        <p>Achieve the maximum Quality of work with minimum Payment</p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='col-lg-3'>
                  <Fade up>
                    <div className='bg-accents_8 h-60 max-h-full flex items-center justify-start lg:justify-center px-4 py-6 rounded-md shadow-2xl mb-6 lg:mb-0'>
                      <div>
                        <img src='/images/up-to-date.png' alt='' />
                        <h3 className='mt-4 mb-2'>Up to Date</h3>
                        <p>I always keep an Open eye on all the worldwide design Trends</p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='my-projects' className='pt-36 pb-16'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-10 mx-auto'>
              <div className='text-center'>
                <Fade up>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-24'>My Projects</h2>
                </Fade>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal9}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/9.jpg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>VIP Watch</p>
                </div>
                <PureModal
                  isOpen={open9}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen9(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/9.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal1}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/1.jpg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Adore furniture</p>
                </div>
                <PureModal
                  isOpen={open1}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen1(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/1.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal2}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/2.png'
                      alt=''
                      className='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Arj Social Organization</p>
                </div>
                <PureModal
                  isOpen={open2}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen2(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/2.png' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal3}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/3.png'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Green Sketch</p>
                </div>
                <PureModal
                  isOpen={open3}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen3(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/3.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal4}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/4.jpeg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Kavesh</p>
                </div>
                <PureModal
                  isOpen={open4}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen4(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/4.jpeg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal5}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/5.jpg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Masnad Law Firm Letterhead</p>
                </div>
                <PureModal
                  isOpen={open5}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen5(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/5.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal6}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/6.jpg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>MM Design</p>
                </div>
                <PureModal
                  isOpen={open6}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen6(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/6.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal7}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/7.jpg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Rahrawan Travels</p>
                </div>
                <PureModal
                  isOpen={open7}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen7(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/7.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 flex items-center justify-center cursor-pointer relative mb-12'>
              <Fade up>
                <div className='cards cards--item' onClick={onOpenModal8}>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      blurDataURL=''
                      layout='fill'
                      objectFit='contain'
                      src='/images/projects/8.jpg'
                      alt='h-full'
                    />
                  </div>
                  <span className='cards--item__rect'></span>
                  <span className='cards--item__tri'></span>
                  <p className='uppercase text-sm w-20 ml-4 pb-2'>Tatto Artist</p>
                </div>
                <PureModal
                  isOpen={open8}
                  closeButton={
                    <svg className='svg-icon' viewBox='0 0 20 20'>
                      <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                  }
                  closeButtonPosition='bottom'
                  onClose={() => setOpen8(false)}
                  className='!w-auto !h-auto'
                >
                  <div className=''>
                    <img className='' width='762' height='571' src='/images/projects/8.jpg' />
                  </div>
                </PureModal>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section id='contact-us' className='pt-36 pb-16'>
        <ContactForm />
      </section>
      <section className='bg-accents_9'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-12'>
              <div className='flex flex-col items-center justify-center '>
                <div className='flex items-center justify-center pt-6 pb-4'>
                  <table className='w-full'>
                    <tr className='flex items-center justify-center'>
                      <Fade left>
                        <td className='align-middle pr-6 last:pr-0'>
                          <i className='fab fa-facebook-f'></i>
                        </td>
                      </Fade>
                      <Fade up>
                        <td className='align-middle pr-6 last:pr-0'>
                          <i className='fab fa-twitter'></i>
                        </td>
                      </Fade>
                      <Fade right>
                        <td className='align-middle pr-6 last:pr-0'>
                          <i className='fab fa-instagram'></i>
                        </td>
                      </Fade>
                    </tr>
                  </table>
                </div>
                <div className='text-center mb-4'>
                  <span>Designed and Developed with ❤️</span>
                  <br /> by
                  <span className='font-bold'> Mustafa Masoudi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Mustafa Masoudi'
      descriptionContent='A professional graphic designer and video editor with Creative, Focused, Detail-oriented Design Professional with a strong work Ethic.'
    >
      <main>{page}</main>
      <Footer />
    </Layout>
  )
}
