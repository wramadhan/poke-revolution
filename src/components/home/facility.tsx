import { FacilityContent, FacilityTitle } from '@/services/content'
import { useLangStore } from '@/store/language'

export const Facility = () => {
  const { lang } = useLangStore()
  return (
    <div className='bg-secondary py-12'>
      <h2 className='text-primary font-bold text-4xl text-center'>
        {FacilityTitle[lang ? 'en' : 'id']}
      </h2>

      <p className='text-primary text-center text-2xl py-12 px-20'>
        {FacilityContent[lang ? 'en' : 'id']}
      </p>
    </div>
  )
}
