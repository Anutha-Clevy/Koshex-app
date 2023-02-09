import Head from 'next/head'
import type { AppProps } from 'next/app'
import React from 'react'
import { BaseProvider } from 'baseui'
import { Provider as StyletronProvider } from 'styletron-react'
import { SnackbarProvider } from 'baseui/snackbar'
import { createTheme } from 'baseui'

import '../styles/global.css'
import { Styletron } from '../utils'

export const Theme = createTheme()

const Koshex = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Koshex</title>
      </Head>
        <StyletronProvider value={Styletron}>
          <BaseProvider theme={Theme}>
            <SnackbarProvider placement='bottomRight'>
              <Component {...pageProps} />
            </SnackbarProvider>
          </BaseProvider>
        </StyletronProvider>
    </>
  )
}

export default Koshex
