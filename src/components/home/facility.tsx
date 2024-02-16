import { FacilityContent, FacilityTitle } from '@/services/home/facilities'
import { useLangStore } from '@/store/language'
import { Card } from './_card'
import { CardFacilities } from '@/services/home/_cardFacilities'
import { useRef } from 'react'
import { useScrollChangingComponent } from '@/utils/useScrollChangingComponent'

export const Facility = () => {
  const scrollFromTopRef = useRef<HTMLParagraphElement>(null)
  const { screenHeight, diffScroll } = useScrollChangingComponent({
    elementRef: scrollFromTopRef,
  })

  const { lang } = useLangStore()

  return (
    <div className='bg-secondary py-4 sm:py-12'>
      <h2
        className={`text-primary duration-200 font-bold text-4xl smMax:text-sm text-center opacity-${
          diffScroll - screenHeight * 0.9 < 0
            ? '100 translate-y-0'
            : '0 translate-y-11'
        }`}
      >
        {FacilityTitle[lang ? 'en' : 'id']}
      </h2>
      <p
        ref={scrollFromTopRef}
        className={`text-primary text-center duration-150 ease-in-out text-2xl py-4 sm:py-12 sm:px-14 px-4 smMax:text-xs opacity-${
          diffScroll - screenHeight * 0.8 < 0
            ? '100 gap-10 translate-y-0'
            : '0 gap-x-0 -translate-y-5 -translate-x-10 rotate-6'
        }`}
      >
        {FacilityContent[lang ? 'en' : 'id']}
      </p>
      <div
        className={`flex justify-center ease-in-out opacity-${
          diffScroll - screenHeight * 0.6 < 0
            ? '100 gap-10 translate-y-0'
            : '0 gap-x-0 -translate-y-5 -rotate-6 -translate-x-5'
        } duration-500`}
      >
        {CardFacilities[lang ? 'en' : 'id'].map((card, index) => (
          <Card
            route={card.route}
            key={`${index + 1}`}
            imageSrc={card.img}
            altText={card.title}
            desc={card.content}
          />
        ))}
      </div>
    </div>
  )
}
