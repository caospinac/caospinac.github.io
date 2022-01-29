import PropTypes from 'prop-types'
import { BannerPlace, BannerContainer } from './styled'

export const Banner = ({ children }) => {
  return (
    <BannerPlace>
      <BannerContainer>
        {children}
      </BannerContainer>
    </BannerPlace>
  )
}

Banner.propTypes = {
  children: PropTypes.node,
}
