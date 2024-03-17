import { TextAlert } from '@/services/contact/alert'
import { useLangStore } from '@/store/language'
import { Icon } from '@iconify/react'

interface ModalProps {
  timeModal: boolean
  status: string
}

export const AlertModal: React.FC<ModalProps> = ({ timeModal, status }) => {
  const { lang } = useLangStore()
  let _color = status === 'success' ? 'tertiary' : 'red'
  return (
    <div
      className={`fixed bg-quaternary border-${
        status === 'success' ? 'tertiary' : 'red'
      } border-2 w-48 bottom-2 right-2 rounded-md overflow-hidden`}
    >
      <div className='flex justify-between px-2'>
        <Icon
          className={`text-${_color} text-2xl my-0.5`}
          icon={`mdi:${
            status == 'success' ? 'success' : 'warning'
          }-circle-outline`}
        />
        <p className={`text-${_color}`}>
          {
            TextAlert[lang ? 'en' : 'id'][
              `${status == 'success' ? 'success' : 'failed'}`
            ]
          }
        </p>
      </div>
      <div
        className={`h-2 z-50 bg-${_color} ease-in-out`}
        style={{
          width: timeModal ? '100%' : '0',
          transition: 'width 3000ms',
        }}
      ></div>
    </div>
  )
}
