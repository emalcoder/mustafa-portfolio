import React from 'react'
import { Modal } from 'react-responsive-modal'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ParticlesComponents from '../components/Particles'

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
            <div>
              <Header />
            </div>
          </div>
        </div>
      </div>
      <section id='hero' className='mt-60 h-[70vh]'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <h1 className='pb-6'>
                    <span className='inline-block text-base uppercase pb-4'>
                      hi there 👋 I&apos;m
                    </span>
                    <br />
                    <span className='inline-block text-7xl font-bold font-palyfair capitalize pb-4'>
                      <span className='underline decoration-primary'>mustafa</span> masoudi
                    </span>
                    <br />
                    <span className='uppercase font-bold text-secondary'>
                      graphic designer + video editor 👨‍💻
                    </span>
                  </h1>
                  <p className='pb-8 text-xl text-accents_5 font-semibold'>
                    A professional graphic designer and video editor with Creative, Focused,
                    Detail-oriented Design Professional with a strong work Ethic.
                  </p>
                </div>
                <div className=''>
                  <img src='./images/mustafa-img.png' alt='' className='w-[50rem]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='bg-accents_8 pt-36 pb-16'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <div className='my-4'>Who I am</div>
                <div className='flex items-center justify-start mb-10 pr-16'>
                  <h2 className='text-3xl font-bold'>About me</h2>
                  <span className='flex-1 w-full h-px bg-secondary inline-block ml-3'></span>
                </div>
                <div>
                  <p className='pb-6'>
                    Dynamic and innovative professional with years of invaluable hands-on experience
                    in handling several simultaneous creative design projects, concept creation,
                    animation, video production and visual conceptualization. Equipped with the
                    ability to escalate brand awareness by utilizing skills gained in the creative
                    industry. Being able to identify opportunities, overcome objections and build
                    long-term mutually beneficial relationships with vendors, work force and
                    clients.
                  </p>
                </div>
                <div className='my-14'>
                  <button className='bg-secondary text-accents_9 px-8 py-2.5'>Download CV</button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='relative'>
                <div className='px-2 py-2 absolute top-[4.5rem] left-[2rem]'>
                  <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                    <h5 className='text-xl text-accents_9'>Communication</h5>
                  </div>
                </div>
                <div className='px-2 py-2 absolute top-0 left-[11rem]'>
                  <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                    <h5 className='text-xl text-accents_9'>Creativity</h5>
                  </div>
                </div>
                <div className='px-2 py-2 absolute top-[4.5rem] left-[20rem]'>
                  <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                    <h5 className='text-xl text-accents_9'>Teamwork</h5>
                  </div>
                </div>
                <div className='px-2 py-2 absolute top-[14rem] left-[2rem]'>
                  <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                    <h5 className='text-xl text-accents_9'>Organization</h5>
                  </div>
                </div>
                <div className='px-2 py-2 absolute top-[19rem] left-[11rem]'>
                  <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                    <h5 className='text-xl text-accents_9'>Leadership</h5>
                  </div>
                </div>
                <div className='px-2 py-2 absolute top-[14rem] left-[20rem]'>
                  <div className='bg-secondary rounded-circle w-44 h-44 flex items-center justify-center'>
                    <h5 className='text-xl text-accents_9'>TeamPlayer</h5>
                  </div>
                </div>
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
                <h2 className='text-5xl font-bold mb-10'>Professional Skills</h2>
                <div className='w-full'>
                  <div className='pt-10 pb-4'>
                    <div className='flex items-center mb-10 last:mb-0'>
                      <p className='basis-2/12 mr-12 text-lg font-rubik font-medium'>Photoshop</p>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[90%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          90%
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center mb-10 last:mb-0'>
                      <p className='basis-2/12 mr-12 text-lg font-rubik font-medium'>Illustrator</p>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[85%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          85%
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center mb-10 last:mb-0'>
                      <p className='basis-2/12 mr-12 text-lg font-rubik font-medium'>Premier Pro</p>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[70%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          70%
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center mb-10 last:mb-0'>
                      <p className='basis-2/12 mr-12 text-lg font-rubik font-medium'>
                        After Effects
                      </p>
                      <div className='w-full bg-accents_5'>
                        <div className='w-[60%] h-5 flex items-center justify-end bg-secondary text-primary font-bold'>
                          60%
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center mb-10 last:mb-0'>
                      <p className='basis-2/12 mr-12 text-lg font-rubik font-medium'>WordPress</p>
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
      <section id='my-projects' className='pt-36 pb-16'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-10 mx-auto'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold mb-24'>Why should you hire me ?</h2>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='bg-accents_8 h-60 max-h-full flex items-center justify-center px-4 py-6 rounded-md shadow-2xl'>
                    <div>
                      <img src='./images/creativity.png' alt='' />
                      <h3 className='mt-4 mb-2'>Creativity</h3>
                      <p>Unlimited flow of Ideas and an out of box Mind</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='bg-accents_8 h-60 max-h-full flex items-center justify-center px-4 py-6 rounded-md shadow-2xl'>
                    <div>
                      <img src='./images/punctuality.png' alt='' />
                      <h3 className='mt-4 mb-2'>Punctuality</h3>
                      <p>Always get your work done in time, or even before the deadline</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='bg-accents_8 h-60 max-h-full flex items-center justify-center px-4 py-6 rounded-md shadow-2xl'>
                    <div>
                      <img src='./images/payment-rate.png' alt='' />
                      <h3 className='mt-4 mb-2'>Perfect Payment Rate</h3>
                      <p>Achieve the maximum Quality of work with minimum Payment</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='bg-accents_8 h-60 max-h-full flex items-center justify-center px-4 py-6 rounded-md shadow-2xl'>
                    <div>
                      <img src='./images/up-to-date.png' alt='' />
                      <h3 className='mt-4 mb-2'>Up to Date</h3>
                      <p>I always keep an Open eye on all the worldwide design Trends</p>
                    </div>
                  </div>
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
                <h2 className='text-5xl font-bold mb-24'>My Projects</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal1}>
                <img src='./images/projects/1.jpg' alt='' />
              </div>
              <Modal
                open={open1}
                onClose={onCloseModal1}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/1.jpg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal2}>
                <img src='./images/projects/2.png' alt='' />
              </div>
              <Modal
                open={open2}
                onClose={onCloseModal2}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/2.png' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal3}>
                <img src='./images/projects/3.jpg' alt='' />
              </div>
              <Modal
                open={open3}
                onClose={onCloseModal3}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/3.jpg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal4}>
                <img src='./images/projects/4.jpeg' alt='' />
              </div>
              <Modal
                open={open4}
                onClose={onCloseModal4}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/4.jpeg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal5}>
                <img src='./images/projects/5.jpg' alt='' />
              </div>
              <Modal
                open={open5}
                onClose={onCloseModal5}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/5.jpg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal6}>
                <img src='./images/projects/6.jpg' alt='' />
              </div>
              <Modal
                open={open6}
                onClose={onCloseModal6}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/6.jpg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal7}>
                <img src='./images/projects/7.jpg' alt='' />
              </div>
              <Modal
                open={open7}
                onClose={onCloseModal7}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/7.jpg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal8}>
                <img src='./images/projects/8.jpg' alt='' />
              </div>
              <Modal
                open={open8}
                onClose={onCloseModal8}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/8.jpg' alt='' className='mt-8' />
              </Modal>
            </div>
            <div className='col-md-4 flex items-center justify-center cursor-pointer'>
              <div className='mb-12' onClick={onOpenModal9}>
                <img src='./images/projects/9.jpg' alt='' />
              </div>
              <Modal
                open={open9}
                onClose={onCloseModal9}
                center
                initialFocusRef={modalRef}
                ref={modalRef}
              >
                <img src='./images/projects/9.jpg' alt='' className='mt-8' />
              </Modal>
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
                      <td className='align-middle pr-6 last:pr-0'>
                        <i className='fab fa-facebook-f'></i>
                      </td>
                      <td className='align-middle pr-6 last:pr-0'>
                        <i className='fab fa-twitter'></i>
                      </td>
                      <td className='align-middle pr-6 last:pr-0'>
                        <i className='fab fa-instagram'></i>
                      </td>
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
    <Layout>
      <main>{page}</main>
      <Footer />
    </Layout>
  )
}
