import { useEffect, useRef } from 'react'

// Adds a ripple effect on click for any element. Pass the ref.
export default function useRipple() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    const onClick = (e) => {
      const rect = el.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      ripple.style.width = size + 'px'
      ripple.style.height = size + 'px'
      ripple.style.left = e.clientX - rect.left - size / 2 + 'px'
      ripple.style.top = e.clientY - rect.top - size / 2 + 'px'
      ripple.className = 'ripple'
      el.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }

    el.addEventListener('click', onClick)
    return () => el.removeEventListener('click', onClick)
  }, [])

  return ref
}