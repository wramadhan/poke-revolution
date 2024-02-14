import { Icon } from '@iconify/react'

export const ToggleButton = ({
  check,
  setCheck,
  lang,
}: {
  lang: boolean
  check: boolean
  setCheck: (isChecked: boolean) => void
}) => {
  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={check}
          onChange={() => setCheck(!check)}
          className='sr-only'
        />
        <div
          className={`box block h-6 w-10 rounded-full p-2 ${
            check
              ? 'bg-primary border-primary border-2 border-solid'
              : 'bg-tertiary border-quaternary border-2 border-solid'
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
            check ? 'translate-x-full' : ''
          } font-semibold`}
        >
          <Values lang={lang} isChecked={check} />
        </div>
      </div>
    </label>
  )
}
const Values = ({ lang, isChecked }: { lang: boolean; isChecked: boolean }) => {
  if (lang) {
    return isChecked ? (
      <p className='text-xs'>EN</p>
    ) : (
      <p className='text-xs'>ID</p>
    )
  } else {
    return isChecked ? (
      <Icon icon='ph:sun-fill' />
    ) : (
      <Icon icon='ph:moon-fill' />
    )
  }
}
