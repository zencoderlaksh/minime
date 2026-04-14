import { useEffect } from 'react'

export function useLockBodyScroll(locked) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (locked) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [locked])
}
