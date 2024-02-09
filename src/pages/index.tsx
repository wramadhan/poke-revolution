import { Footer } from '@/components/footer'
import { Facility } from '@/components/home/facility'
import { MainHome } from '@/components/home/mainSection'
export default function Home() {
  return (
    <div className='font-poppins'>
      <MainHome />
      <Facility />
      <Footer />
    </div>
  )
}
