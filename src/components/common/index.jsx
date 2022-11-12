import PropTypes from 'prop-types'
import { BannerContainer } from './styled'

export const Banner = ({ children }) => {
  return (
    <BannerContainer>
      {children}
    </BannerContainer>
  )
}

Banner.propTypes = {
  children: PropTypes.node,
}
