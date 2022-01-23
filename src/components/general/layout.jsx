import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled(ContentWrapper)`
  height: 4.8rem;
  padding-top: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  div.fixed-content {
    width: inherit;
    height: inherit;
    padding: inherit;
    margin-bottom: inherit;
    z-index: 777;
    top: 0;
    left: 0;
    position: fixed;
  }
`
