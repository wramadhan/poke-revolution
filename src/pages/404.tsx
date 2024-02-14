import { NotFoundPage } from '@/services/_404text'
import { useLangStore } from '@/store/language'

export default function Custom404() {
  const { lang } = useLangStore()
  return (
    <div
      className='pt-20 bg-primary flex justify-center text-white font-mochiypopone flex-col'
      style={{ height: 'calc(100vh - 94px)' }}
    >
      <h1 className='text-center'>{NotFoundPage[lang ? 'en' : 'id']}</h1>
    </div>
  )
}
