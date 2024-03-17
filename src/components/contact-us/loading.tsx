import React from 'react'
import { Puff, Rings } from 'react-loader-spinner'

export const Loading: React.FC = () => {
  return (
    <>
      <div className='flex justify-center bg-primary'>
        {/* mengecek, apakah pengguna menggunakan browser safari atau tidak */}
        {/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (
          <div className='animate-ping'>
            <Puff
              visible={true}
              height='80'
              width='80'
              color='#fff'
              ariaLabel='rings-loading'
              wrapperClass='text-white'
            />
          </div>
        ) : (
          <div className='animate-ping'>
            <Rings
              visible={true}
              height='80'
              width='80'
              color='#fff'
              ariaLabel='rings-loading'
              wrapperClass='text-white'
            />
          </div>
        )}
      </div>
      <p className='text-white text-center animate-pulse'>
        Mohon Tunggu Sebentar
      </p>
    </>
  )
}
