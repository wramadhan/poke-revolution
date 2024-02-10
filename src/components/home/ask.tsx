import { BriefDescText } from '@/services/home/briefDesc'
import { useLangStore } from '@/store/language'
import { Icon } from '@iconify/react'
import ExampleAccordion from './_accordion'

export const BriefDesc = () => {
  const { lang } = useLangStore()
  const dataArray = ['ini teks 1', 'ini teks 2', 'ini teks 3', 'ini teks 4']
  return (
    <div className='bg-quaternary py-24 px-12'>
      <p className='text-tertiary font-bold text-center text-4xl'>
        {BriefDescText[lang ? 'en' : 'id']['title']}
      </p>
      {BriefDescText['id']['chat'].map((item, index) => (
        <div
          key={index}
          className={`flex py-2 ${
            index % 2 === 0 ? 'text-left' : ' text-right flex-row-reverse'
          } `}
        >
          <div
            className={`${
              index % 2 === 0 ? 'bg-tertiary' : 'bg-primary'
            } gap-3 px-4 py-2 flex rounded-2xl font-bold text-quaternary`}
          >
            {index === 0 && (
              <Icon icon='ic:twotone-chat' className='text-2xl' />
            )}
            {item}
          </div>
        </div>
      ))}
      {/* <ExampleAccordion /> */}
    </div>
  )
}

// {BriefDescText['id']['chat'].map((item, index) => (
//   <div
//     key={index}
//     className={`flex py-2 ${
//       index % 2 === 0 ? 'text-left' : ' text-right flex-row-reverse'
//     } `}
//   >
//     <div
//       className={`${
//         index % 2 === 0 ? 'bg-tertiary' : 'bg-primary'
//       } gap-3 px-4 py-2 flex rounded-2xl font-bold text-quaternary`}
//     >
//       {index === 0 && (
//         <Icon icon='ic:twotone-chat' className='text-2xl' />
//       )}
//       {item}
//     </div>
//   </div>
// ))}
