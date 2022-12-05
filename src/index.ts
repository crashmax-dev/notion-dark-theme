import { domReady, observeElement } from '@zero-dependency/dom'

domReady().then(() => {
  const enableDarkTheme = toggleTheme()
  observeElement(document.body, () => enableDarkTheme())
})

function toggleTheme() {
  const ctrlShiftL = new KeyboardEvent('keydown', {
    key: 'l',
    keyCode: 76,
    code: 'KeyL',
    which: 76,
    shiftKey: true,
    ctrlKey: true,
    metaKey: false
  })

  return () => {
    try {
      const theme = localStorage.getItem('theme')
      if (!theme) return

      const { mode } = JSON.parse(theme)
      if (mode === 'light') {
        window.dispatchEvent(ctrlShiftL)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
