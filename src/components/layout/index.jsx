import PropTypes from 'prop-types'

import { GlobalColors } from './colors'
import { GlobalStyles } from './styles'

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalColors />
      <GlobalStyles />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
