import React, { useRef, useEffect } from 'react'

const PlainCanvas: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.width = ref.current.clientWidth * devicePixelRatio
    canvas.height = ref.current.clientHeight * devicePixelRatio
    ctx.scale(devicePixelRatio, devicePixelRatio)
    ref.current.appendChild(canvas)

    let frame = 0
    const resize = () => {
      if (!ref.current) return
      const w = ref.current.clientWidth
      const h = ref.current.clientHeight
      canvas.width = w * devicePixelRatio
      canvas.height = h * devicePixelRatio
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const draw = () => {
      if (!ref.current) return
      const w = ref.current.clientWidth
      const h = ref.current.clientHeight
      ctx.clearRect(0, 0, w, h)

      // background gradient
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#0f1724')
      g.addColorStop(1, '#111827')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // animated circles
      for (let i = 0; i < 12; i++) {
        const t = frame / 60 + i * 0.5
        const x = w / 2 + Math.cos(t * (0.6 + i * 0.02)) * (80 + i * 18)
        const y = h / 2 + Math.sin(t * (0.5 + i * 0.015)) * (50 + i * 12)
        const r = 8 + (Math.sin(t * 1.5) + 1) * 6
        ctx.beginPath()
        ctx.fillStyle = `rgba(${100 + i * 10}, ${150 + i * 6}, ${255 - i * 8}, 0.85)`
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      frame++
      requestAnimationFrame(draw)
    }

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      if (ref.current && ref.current.contains(canvas)) ref.current.removeChild(canvas)
    }
  }, [])

  return <div className="three-mount" ref={ref} />
}

export default PlainCanvas
