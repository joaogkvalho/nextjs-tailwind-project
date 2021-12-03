import { Layout } from '../components/Layout'
import { AnimateSharedLayout } from 'framer-motion'

import '../styles/tailwind.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return(
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}
