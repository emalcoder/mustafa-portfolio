import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { css } from '@emotion/react'
import GridLoader from 'react-spinners/GridLoader'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import Flip from 'react-reveal/Flip'
import Roll from 'react-reveal/Roll'

const ContactForm = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContactInfo({ ...contactInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('https://abr-backend.herokuapp.com/rahrawan-contact-forms', {
      method: 'POST',
      headers: {
        // update with your user-agent
        'User-Agent': '*',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(contactInfo),
    })
      .then((res) => {
        setLoading(false)
        if (res.status === 200) {
          enqueueSnackbar('Your message send successfully')
        } else {
          enqueueSnackbar('Your message was not send, please try again')
        }
        return res
      })
      .catch(() => {
        setLoading(false)
        enqueueSnackbar('Your message was not send, please try again')
      })
    setContactInfo({
      name: '',
      email: '',
      message: '',
    })
  }
  return (
    <div className='container'>
      <div className='row justify-center'>
        <div className='col'>
          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-16 lg:mb-24'>
              Get in touch
            </h2>
          </div>
        </div>
      </div>
      <div className='row justify-center'>
        <div className='col-lg-4'>
          <div>
            <ul>
              <Fade left>
                <li className='flex items-start mb-6'>
                  <div className='text-2xl text-secondary pt-1'>
                    <i className='flaticon-pin'></i>
                  </div>
                  <div className='ml-4'>
                    <h5 className='text-sm md:text-base'>Address</h5>
                    <address className='not-italic text-sm md:text-base'>
                      Kabul, Afghanistan
                    </address>
                  </div>
                </li>
              </Fade>
              <Fade left>
                <li className='flex items-start mb-6'>
                  <div className='text-2xl text-secondary pt-1'>
                    <i className='flaticon-phone-call'></i>
                  </div>
                  <div className='ml-4'>
                    <h5 className='text-sm md:text-base'>Phone</h5>
                    <div className='text-sm'>+93 780 87 57 87</div>
                  </div>
                </li>
              </Fade>
              <Fade left>
                <li className='flex items-start mb-6'>
                  <div className='text-2xl text-secondary pt-1'>
                    <i className='flaticon-mail'></i>
                  </div>
                  <div className='ml-4'>
                    <h5 className='text-sm md:text-base'>Email</h5>
                    <div className='text-sm md:text-base'>mustafamasoudi54@gmail.com</div>
                  </div>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='px'>
            <form onSubmit={handleSubmit}>
              <Fade down>
                <div>
                  <input
                    name='name'
                    value={contactInfo.name}
                    onChange={handleChange}
                    type='text'
                    placeholder='Name'
                    required
                  />
                </div>
              </Fade>
              <Fade down>
                <div>
                  <input
                    name='email'
                    value={contactInfo.email}
                    onChange={handleChange}
                    type='email'
                    placeholder='Email'
                    required
                  />
                </div>
              </Fade>
              <Fade down>
                <div>
                  <textarea
                    name='message'
                    value={contactInfo.message}
                    onChange={handleChange}
                    id=''
                    cols='30'
                    rows='10'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
              </Fade>
              <Fade right>
                <div className='flex items-center justify-center'>
                  <button className='mx-auto w-40 bg-secondary' type='submit'>
                    {!loading ? (
                      <div className='flex items-center justify-center'>
                        <span>Send</span>
                        <i className='fas fa-long-arrow-right ml-2'></i>
                      </div>
                    ) : (
                      <div>
                        <GridLoader color={'#ffffff'} loading={true} size={5} />
                      </div>
                    )}
                  </button>
                </div>
              </Fade>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
