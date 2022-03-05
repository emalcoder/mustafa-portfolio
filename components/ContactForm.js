import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { css } from '@emotion/react'
import GridLoader from 'react-spinners/GridLoader'

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
        <div className='col-lg-6 mx-auto'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold mb-10'>Get in touch</h2>
            <div className='px'>
              <form onSubmit={handleSubmit}>
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
                <div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
