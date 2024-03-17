import { useState, useEffect } from 'react'

export const useShowModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [timeModal, setTimeModal] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('success')

  const openModal = (status: string) => {
    setShowModal(true)
    setTimeModal(true)
    setStatus(status)
  }

  useEffect(() => {
    if (showModal) {
      const timeout1 = setTimeout(() => {
        setShowModal(false)
      }, 3000)
      const timeout2 = setTimeout(() => setTimeModal(false), 100)
      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
      }
    }
  }, [showModal])

  return { showModal, timeModal, status, openModal }
}
