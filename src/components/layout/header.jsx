import styled from 'styled-components'

const HeaderWrapper = styled.div`
  height: 2rem;
  padding-top: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  div.fixed-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    padding: inherit;
    margin-bottom: inherit;
    z-index: 777;
    top: 0;
    left: 0;
    position: fixed;

    span {
      margin: 0 .7em;
    }
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="fixed-content">
        <span className="link">Header item</span>
      </div>
    </HeaderWrapper>
  )
}

export default Header
