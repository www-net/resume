const root = document.documentElement

export const waveAnimation = (event) => {
  const el = event.currentTarget

  const x = event.offsetX
  const y = event.offsetY

  console.log(x, y)

  root.style.setProperty('--x', x)
  root.style.setProperty('--y', y)

  el.setAttribute('ripple', true)
  el.classList.add('ripple', 'ripple-activate')

  requestAnimationFrame(() => {
    el.classList.remove('ripple-activate')
  })

  el.addEventListener('transitionend', () => {
    el.classList.remove('ripple')
    el.removeAttribute('ripple')
  })
}