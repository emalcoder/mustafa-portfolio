import { SnackbarProvider } from 'notistack'
import 'react-responsive-modal/styles.css'

import '../styles/globals.css'
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
