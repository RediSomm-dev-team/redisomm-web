import '../styles/globals.scss'
import 'nextra-theme-docs/style.css'
import type { AppProps } from 'next/app'

function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Nextra
