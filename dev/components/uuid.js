export function uuid() {
  let d = Date.now()
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  )
  const randomLetter = charset[Math.floor(Math.random() * charset.length)]
  return (
    randomLetter +
    'xxxxxxxx'.replace(/[x]/g, function(c) {
      const r = ((d + Math.random() * 16) % 16) | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
  )
}
