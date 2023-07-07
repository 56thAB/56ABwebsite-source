import React from 'react'
import DrawerLeft from '../DrawerLeft'
import Header from '../Header'

export default function Layout({children}) {
  return (
    <>
      <header>
       <Header  > </Header>
      </header>
      <main>
       <DrawerLeft> {children}</DrawerLeft>
      </main>
      <footer>
        {/* Render your footer component here */}
      </footer>
    </>
  )
}
