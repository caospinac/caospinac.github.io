import { Layout } from '../components/layout'

import 'font-awesome/css/font-awesome.css'
import Footer from '../components/layout/footer'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
      <Footer />
    </Layout>
  )
}
