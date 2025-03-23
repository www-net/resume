const root = document.documentElement

export const waveAnimatuion = (event) => {
  const el = event.target
  const top = event.clientY
  const left = event.clientX
  const x = (left - event.offsetLeft) / el.clientWidth
  const y = (top - event.offsetTop) / el.clientHight

  root.setAttribute('--x', x)
  root.setAttribute('--y', y)
}