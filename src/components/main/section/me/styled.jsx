import styled from 'styled-components'

export const MeSection = styled.section`
  align-items: center;
  text-align: left;
`

export const Name = styled.h2`
  color: var(--primary);
`

export const About = styled.div`
  grid-area: main;
`

export const Avatar = styled.div`
  grid-area: image;
  margin: 2rem 0;
  border: 8px solid var(--light);
  box-shadow: 0 0 5px var(--dark-0);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  justify-self: center;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`

export const PresentationWrapper = styled.div`
  display: grid;
  grid-template-areas: 'main main main image';
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-areas:
      'image'
      'main';
    align-items: center;
    justify-content: center;
  }
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
