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
