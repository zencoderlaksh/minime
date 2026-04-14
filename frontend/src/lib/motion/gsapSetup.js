import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let isRegistered = false

export function initializeGsap() {
  if (isRegistered) {
    return
  }

  gsap.registerPlugin(ScrollTrigger)
  isRegistered = true
}
