import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initializeGsap } from '../../lib/motion/gsapSetup.js'
import { useLenisScroll } from '../../hooks/useLenisScroll.js'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return null
}

function AppProviders({ children }) {
  useLenisScroll()

  useEffect(() => {
    initializeGsap()
  }, [])

  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}

export default AppProviders
