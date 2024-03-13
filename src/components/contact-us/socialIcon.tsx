import { Tooltip } from '@/services/contact/tooltip'
import { useLangStore } from '@/store/language'
import { Icon } from '@iconify/react/dist/iconify.js'

interface SocialLinkProps {
  icon: 'linkedin' | 'instagram'
  text: string
  href: string
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, text, href }) => {
  const { lang } = useLangStore()
  return (
    <a
      className='flex text-white gap-2'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      title={Tooltip[lang ? 'en' : 'id'][`${icon}`]}
    >
      <div className='flex flex-col justify-center'>
        <Icon icon={`mdi:${icon}`} className='text-xl' />
      </div>
      <p className='text-sm'>{text}</p>
    </a>
  )
}
