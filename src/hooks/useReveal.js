import { useEffect, useRef } from 'react'

// Reveals an element when it scrolls into view (fade + slide up).
// Respects prefers-reduced-motion.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}