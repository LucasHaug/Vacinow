import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
      <hr />
      <span>LabSoft - G12</span>
    </footer>
  </div>
)

export default Layout
