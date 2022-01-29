import { Layout } from '../components/layout'

import 'font-awesome/css/font-awesome.css'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}
