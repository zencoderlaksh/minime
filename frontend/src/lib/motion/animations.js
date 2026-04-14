import gsap from 'gsap'

export function animateFadeUp(target) {
  const animation = gsap.fromTo(
    target,
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
  )

  return () => animation.kill()
}
