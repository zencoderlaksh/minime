import { useEffect } from 'react'
import { animateFadeUp } from '../lib/motion/animations.js'

export function useGsapReveal(targetRef) {
  useEffect(() => {
    if (!targetRef.current) {
      return undefined
    }

    return animateFadeUp(targetRef.current)
  }, [targetRef])
}
