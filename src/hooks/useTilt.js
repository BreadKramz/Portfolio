import { useEffect, useRef } from 'react'

// Adds a subtle 3D tilt to a card based on mouse position.
// Disabled automatically when motion is reduced or on touch devices.
export default function useTilt(max = 8) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    let raf = null
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = (x / rect.width - 0.5) * 2
      const py = (y / rect.height - 0.5) * 2
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-4px)`
        el.style.transition = 'transform 0.15s ease-out'
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
      el.style.transition = 'transform 0.4s ease'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [max])

  return ref
}