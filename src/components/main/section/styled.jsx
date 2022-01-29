import styled from 'styled-components'

export const SectionWrapper = styled.div`
  --section-padding: 1rem;
  --section-margin: 1rem;

  background-color: white;
  box-shadow: -.2rem .2rem 4rem var(--light-2);
  margin: var(--section-padding);
  padding: var(--section-margin);

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
