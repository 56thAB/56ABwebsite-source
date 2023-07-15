import React from 'react';
import DrawerLeft from '../DrawerLeft';
import Header from '../Header';
import BackgroundImageProvider from '../../tools/BackgroundTool/BackgroundImageProvider';

export default function Layout({ children, image }) {
  return (
    <><BackgroundImageProvider>
      <header>
        <Header />
      </header>
      <main style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
        <DrawerLeft> {children}</DrawerLeft>
      </main>
      <footer>
        {/* Render your footer component here */}
      </footer></BackgroundImageProvider>
    </>
  );
}