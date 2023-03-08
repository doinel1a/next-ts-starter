/* eslint-disable react/no-unknown-property */
import '@/css/globals.css';
import '@/scss/globals.scss';

import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import React from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--roboto'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
