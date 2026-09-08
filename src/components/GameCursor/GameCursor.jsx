import { useEffect, useRef } from 'react'
import './GameCursor.css'

// A custom glowing cursor that follows the mouse and bursts on click.
// Hides the native cursor globally; falls back gracefully on touch.
export default function GameCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const supportsHover = window.matchMedia('(hover: hover)').matches

  useEffect(() => {
    if (!supportsHover) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const d = dot.current
    const r = ring.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = null

    const setPos = (el, x, y) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const tick = () => {
      tx += (x - tx) * 0.18
      ty += (y - ty) * 0.18
      setPos(d, tx, ty)
      setPos(r, tx, ty)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
    }
    const onClick = (e) => {
      const burst = document.createElement('div')
      burst.className = 'cursor-burst'
      burst.style.left = e.clientX + 'px'
      burst.style.top = e.clientY + 'px'
      document.body.appendChild(burst)
      setTimeout(() => burst.remove(), 700)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
    }
  }, [supportsHover])

  if (!supportsHover) return null

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}