import React from 'react'
import styles from "./GuideContent.module.css"

export default function GuideContent({link, name}) {
  return (
    <iframe
    src={link}
    allowtransparency="true"
    frameBorder="0"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    title = {name}
    className={styles.guide}
  ></iframe>
  )
}
