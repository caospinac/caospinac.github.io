import { createContext } from 'react'

import contentJSON from '../../static/content.json'

export const ContentContext = createContext(contentJSON)

export const ContentProvider = ({ children }) => {
  return (
    <ContentContext.Provider value={contentJSON}>
      {children}
    </ContentContext.Provider>
  )
}
