import { Icon } from '@iconify/react'

export const Footer = () => {
  return (
    <footer className='px-12 py-2 bg-tertiary'>
      <div className='flex justify-between text-quaternary'>
        <span className='flex'>
          <Icon icon='ic:twotone-catching-pokemon' className='text-4xl' />
          <h1 className='font-mochiypopone pt-1.5'>
            <div>Poke Revolution</div>
            <div>Everything will envolve in time</div>
          </h1>
        </span>
        <button>Contact US</button>
      </div>
    </footer>
  )
}
