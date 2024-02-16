import { QnAText } from '@/services/home/briefDesc'
import { useLangStore } from '@/store/language'
import { Accordion } from './_accordion'

export const BriefDesc = () => {
  const { lang } = useLangStore()
  return (
    <div className='bg-quaternary py-24 sm:px-12 px-10'>
      <p className='text-tertiary font-bold text-center text-md sm:text-4xl'>
        {QnAText[lang ? 'en' : 'id']['title']}
      </p>
      <Accordion />
    </div>
  )
}
