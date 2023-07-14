import React from 'react';
import DrawerLeft from '../DrawerLeft';
import Header from '../Header';

export default function Layout({ children, image }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
        <DrawerLeft>{children}</DrawerLeft>
      </main>
      <footer>
        {/* Render your footer component here */}
      </footer>
    </>
  );
}