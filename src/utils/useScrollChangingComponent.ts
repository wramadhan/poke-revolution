import { useEffect, useState } from 'react'

interface ScrollChangingComponentProps {
  elementRef: React.MutableRefObject<HTMLParagraphElement | null>
}

export const useScrollChangingComponent = ({
  elementRef,
}: ScrollChangingComponentProps) => {
  const [scrollDistance, setScrollDistance] = useState<number>(0)
  const [screenHeight, setScreenHeight] = useState<number>(0)
  const [diffScroll, setDiffScroll] = useState<number>(0)
  const [isScrolledBeyondScreen, setIsScrolledBeyondScreen] =
    useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      setScrollDistance(currentPosition)
      setIsScrolledBeyondScreen(currentPosition > screenHeight) // Memeriksa apakah telah di-scroll lebih dari tinggi layar
    }

    const handleResize = () => {
      setScreenHeight(window.innerHeight) // Update tinggi layar saat ada perubahan ukuran layar
    }

    // Inisialisasi tinggi layar
    setScreenHeight(window.innerHeight)

    // Tambahkan event listener untuk mendeteksi scroll dan perubahan ukuran layar
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [screenHeight]) // Efek akan berjalan lagi saat screenHeight berubah

  useEffect(() => {
    if (elementRef.current) {
      // Pastikan elementRef.current tidak null sebelum mengakses propertinya
      const distanceFromTop = elementRef.current.offsetTop
      const difference = distanceFromTop - scrollDistance
      setDiffScroll(difference) // Menampilkan selisih dari atas ke komponen yang dituju
    }
  }, [scrollDistance, screenHeight, elementRef])

  return { scrollDistance, screenHeight, isScrolledBeyondScreen, diffScroll }
}
