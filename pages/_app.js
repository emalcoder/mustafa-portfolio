import { SnackbarProvider } from 'notistack'

import 'react-pure-modal/dist/react-pure-modal.min.css'

import '../styles/globals.scss'
import '../styles/grid.css'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
