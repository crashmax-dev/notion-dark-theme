import { domReady, observeElement } from '@zero-dependency/dom'
import { STYLES } from './constants.js'

domReady().then(() => {
  observeElement(document.body, () => {
    const allElements = document.querySelectorAll<HTMLElement>('*')
    for (const el of allElements) {
      for (const [styleKey, styleValues] of Object.entries(STYLES)) {
        // @ts-ignore
        const style: string = el.style[styleKey]
        const darkStyle = styleValues[style]
        if (style && darkStyle) {
          // @ts-ignore
          el.style[styleKey] = darkStyle
        }
      }
    }
  })
})
