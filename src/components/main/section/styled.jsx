import styled from 'styled-components'

export const SectionWrapper = styled.div`
  padding: .7rem 0;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 992px) {
    width: 70vw;
    max-width: 1200px;
  }

  & > section {
    display: flex;
    flex-direction: column;
  }
`
