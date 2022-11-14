import { BannerContainer } from './styled'

export const Banner = ({ children }) => {
  return (
    <BannerContainer>
      {children}
    </BannerContainer>
  )
}

export const SVG = ({ data, children }) => {

  return (
    <object data={data} type="image/svg+xml" height='100%' width='100%'>
      {children}
    </object>
  )
}

export const FaIcon = ({ name }) => <i className={`fa fa-${name}`} aria-hidden="true"></i>
