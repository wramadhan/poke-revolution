import { EmailLink } from '@/components/contact-us/emailIcon'
import { FormContact } from '@/components/contact-us/form'
import { SocialLink } from '@/components/contact-us/socialIcon'
import { DescContact } from '@/services/contact/desc'
import { useLangStore } from '@/store/language'

const Contact = () => {
  const { lang } = useLangStore()
  return (
    <div className='py-16 bg-primary mdMax:px-9 px-14'>
      <div className='md:flex gap-4 justify-between'>
        <div className='w-1/2'>
          <div className='text-quaternary text-center font-poppins font-bold text-2xl'>
            {lang ? 'Contact' : 'Kontak'}
          </div>
          <p className='text-quaternary pt-4'>
            {DescContact[lang ? 'en' : 'id']}
          </p>
          <div className='mdMax:hidden'>
            <Social />
          </div>
        </div>
        <FormContact />
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
