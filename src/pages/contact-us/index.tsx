import { AlertModal } from '@/components/alert'
import { EmailLink } from '@/components/contact-us/emailIcon'
import { FormContact } from '@/components/contact-us/form'
import { Loading } from '@/components/contact-us/loading'
import { SocialLink } from '@/components/contact-us/socialIcon'
import { DescContact } from '@/services/contact/desc'
import { useFormEmail } from '@/store/formEmail'
import { useLangStore } from '@/store/language'
import { useShowModal } from '@/utils/useShowModal'

const Contact = () => {
  const { showModal, timeModal, openModal, status } = useShowModal()
  const { name, email, message, loading, setLoading } = useFormEmail()
  const { lang } = useLangStore()

  const handleSendEmail = () => {
    setLoading(true)
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      service_id: process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_MAIL_USER_ID,
      template_params: {
        from_name: name,
        from_email: email,
        application_name: window.location.origin,
        message: message,
        reply_to: process.env.NEXT_PUBLIC_MYEMAIL,
      },
    })
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    fetch(process.env.NEXT_PUBLIC_EMAIL_API ?? '', requestOptions)
      .then((response) => response.text())
      .then((res) => {
        openModal('success')
        console.log('res : ', res)
      })
      .catch((error) => {
        openModal('failed')
        console.error(error)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className='py-16 bg-primary mdMax:px-9 px-14 md:h-[calc(100vh-66px)]'>
      {showModal && <AlertModal timeModal={timeModal} status={status} />}
      <div className='md:flex gap-4 justify-between'>
        <div className='md:w-1/2 md:flex flex-col justify-evenly'>
          <span>
            <div className='text-quaternary text-center font-poppins font-bold md:mt-7 text-2xl'>
              {lang ? 'Contact' : 'Kontak'}
            </div>
            <p className='text-quaternary pt-4 select-none'>
              {DescContact[lang ? 'en' : 'id']}
            </p>
          </span>
          <div className='mdMax:hidden'>
            <Social />
          </div>
        </div>
        {loading === false ? (
          <FormContact onSubmit={handleSendEmail} />
        ) : (
          <div className='flex justify-center md:w-1/2'>
            <div className='h-[calc(100vh-440px)] md:h-[calc(100vh-200px)] flex flex-col justify-center'>
              <Loading />
            </div>
          </div>
        )}
        <div className='md:hidden'>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Contact

const Social = () => {
  const { lang } = useLangStore()
  return (
    <>
      <p className='text-white font-poppins font-bold text-lg'>
        {lang ? 'Social' : 'Sosial'}
      </p>
      <SocialLink
        icon='linkedin'
        text='Wahyu Ramadhan'
        href='https://www.linkedin.com/in/wahyu-r-211aa6141/'
      />
      <EmailLink
        icon='email'
        text='wahyuramadhan0549@gmail.com'
        email='wahyuramadhan0549@gmail.com'
      />
      <SocialLink
        icon='instagram'
        text='_wahyu_ramadhan'
        href='https://www.instagram.com/_wahyu_ramadhan/'
      />
    </>
  )
}
