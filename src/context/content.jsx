import { createContext } from 'react'
import PropTypes from 'prop-types'

import contentJSON from '../../static/content.json'

export const ContentContext = createContext(contentJSON)

export const ContentProvider = ({ children }) => {
  return (
    <ContentContext.Provider value={contentJSON}>
      {children}
    </ContentContext.Provider>
  )
}

ContentProvider.propTypes = {
  children: PropTypes.node,
}
