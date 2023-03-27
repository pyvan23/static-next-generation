
'use client';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
 
  
  )
}
