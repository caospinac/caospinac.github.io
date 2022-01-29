import styled from 'styled-components'

export const BannerPlace = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
`

export const BannerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: inherit;
  padding: inherit;
  background-color: var(--dark-3);
  color: var(--light);
`

export const  Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
