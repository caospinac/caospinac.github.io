import styled from 'styled-components'
import { FaIcon } from '../common'

export const FooterWrapper = styled.div`
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  background-color: var(--primary);
  color: var(--dark-0);

  font-family: "Montserrat";

  .fa-heart {
    color: var(--red);
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <span>Made with <FaIcon name='heart' /> by Me</span>
    </FooterWrapper>
  )
}

export default Footer
