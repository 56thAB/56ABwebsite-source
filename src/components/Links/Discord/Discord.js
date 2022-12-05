import React from 'react'
import styles from "./Discord.module.css"


export default function Discord() {
  return (
    <iframe
        src="https://ptb.discord.com/widget?id=722533997145489488&theme=dark"
        allowtransparency="true"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className={styles.discord}
      />
  )
}
