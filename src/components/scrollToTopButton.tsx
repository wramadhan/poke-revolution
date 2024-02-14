import { useLangStore } from '@/store/language'

export const ScrollToTopButton = ({
  scrollToTop,
}: {
  scrollToTop: () => void
}) => {
  const { lang } = useLangStore()
  return (
    <button
      onClick={scrollToTop}
      id='btn-back-to-top'
      title={lang ? 'Back to Top' : 'Kembali ke atas'}
      className={`fixed bottom-8 right-8 bg-secondary text-primary border-tertiary bg-gray-700 hover:bg-gray-800 p-2 rounded-full drop-shadow-md shadow-tertiary`}
    >
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        ></path>
      </svg>
    </button>
  )
}
