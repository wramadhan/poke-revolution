import { BriefDesc } from '@/components/home/ask'
import { Facility } from '@/components/home/facility'
import { Hero } from '@/components/home/hero'
export default function Home() {
  return (
    <div className='font-poppins'>
      <Hero />
      <Facility />
      <BriefDesc />
    </div>
  )
}
