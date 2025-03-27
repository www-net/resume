const root = document.documentElement

export const waveAnimation = (event) => {
  const el = event.currentTarget

  const x = event.offsetX
  const y = event.offsetY
  root.style.setProperty('--x', x)
  root.style.setProperty('--y', y)

  el.classList.add('ripple', 'ripple-activate')
  el.addEventListener('transitionend', () => {
    el.classList.remove('ripple')
  })

  requestAnimationFrame(() => {
    el.classList.remove('ripple-activate')
  })
}
