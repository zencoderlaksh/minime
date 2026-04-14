import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
    })

    let animationFrame = 0

    const frame = (time) => {
      lenis.raf(time)
      animationFrame = window.requestAnimationFrame(frame)
    }

    animationFrame = window.requestAnimationFrame(frame)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])
}
