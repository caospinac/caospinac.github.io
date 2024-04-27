import styled from 'styled-components'

export const SectionWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 992px) {
    padding-left: 2vw;
    padding-right: 2vw;
    width: 70vw;
    max-width: 1200px;
  }

  & > section {
    display: flex;
    flex-direction: column;
  }
`
