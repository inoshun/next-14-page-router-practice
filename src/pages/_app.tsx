import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import Layout from '@/components/Layout'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 12,
  },
})

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
