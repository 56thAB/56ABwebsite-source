import React from 'react'
import styles from "./GuideContent.module.css"

export default function GuideContent({link}) {
  return (
    <iframe
    src={link}
    allowtransparency="true"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    className={styles.guide}
  ></iframe>
  )
}
