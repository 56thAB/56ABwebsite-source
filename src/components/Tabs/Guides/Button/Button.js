import React from 'react'
import styles from "./Button.module.css"

export default function Button({name, handleGuide}) {
  return (
    <input type="button" name = {name} className={styles.button} value={name} onClick={handleGuide}/>
  )
}
