import { FacilityContent, FacilityTitle } from '@/services/content'
import { useState } from 'react'

export const Facility = () => {
  return (
    <div className='bg-secondary py-12'>
      <h2 className='text-primary font-bold text-4xl text-center'>
        {FacilityTitle['en']}
      </h2>

      <p className='text-primary text-center text-2xl py-12 px-20'>
        {FacilityContent['en']}
      </p>
    </div>
  )
}
