import { Tooltip } from '@/services/contact/tooltip'
import { useLangStore } from '@/store/language'
import { Icon } from '@iconify/react/dist/iconify.js'

interface EmailLinkProps {
  icon: string
  text: string
  email: string
}

export const EmailLink: React.FC<EmailLinkProps> = ({ icon, text, email }) => {
  const { lang } = useLangStore()
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div
      title={Tooltip[lang ? 'en' : 'id'].email}
      onClick={handleEmailClick}
      className='flex text-white gap-2 py-2 cursor-pointer'
    >
      <div className='flex flex-col justify-center'>
        <Icon icon={`mdi:${icon}`} className='text-xl' />
      </div>
      <p className='text-sm'>{text}</p>
    </div>
  )
}
