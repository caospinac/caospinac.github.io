import styled from 'styled-components'

export const MeSection = styled.section`
  align-items: center;
  text-align: center;
`

export const Media = styled.div`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    margin: .1em;
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    background-color: var(--dark-0);
    transition: background-color .2s;

    &:hover {
      background-color: var(--primary);
    }
  }
`

export const Avatar = styled.div`
  margin: 2rem 0;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`
