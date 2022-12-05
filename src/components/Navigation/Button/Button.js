import React from 'react'
import styles from "./Button.module.css"

export default function Button({name, handleClick}) {
  return (
    <input type="button" name = {name} className={styles.button} value={name} onClick={handleClick}/>
  )
}
