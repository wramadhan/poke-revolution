import { FacilityContent, FacilityTitle } from '@/services/home/facilities'
import { useLangStore } from '@/store/language'
import { Card } from './_card'
import { CardFacilities } from '@/services/home/_cardFacilities'

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
      <div className='flex justify-center gap-10'>
        {CardFacilities[lang ? 'en' : 'id'].map((card, index) => (
          <Card
            key={index}
            imageSrc={card.img}
            altText={card.title}
            desc={card.content}
          />
        ))}
      </div>
    </div>
  )
}
