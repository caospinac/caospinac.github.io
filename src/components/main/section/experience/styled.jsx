import styled from 'styled-components'

export const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  & > * {
    text-align: center;
  }
`

export const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-auto-rows: 100px;
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: minmax(300px, 90%);
    justify-content: center;
  }
`
export const CompanyBox = styled.div`
  --border: .5rem;

  position: relative;
  padding: 1rem;
  width: inherit;
  height: inherit;
  background-color: var(--light-2);
  filter: saturate(80%);
  border-radius: var(--border);

  & > a {
    position: absolute;
    display: inline;
    bottom: 0;
    right: 0;
    background-color: var(--dark);
    opacity: 0;
    padding: .5em;
    border-radius: var(--border) 0;
    transition: all .2s;
  }

  &:hover > a {
    opacity: .4;

    &:hover {
      opacity: .6;
    }
  }

  &.active {
    border: 3px solid var(--primary);
    margin: -1.5px;

    &::before {
      content: 'Present';
      position: absolute;
      top: -.615em;
      height: 1.3em;
      left: 1em;
      padding: 0 .7em;
      font-size: 12pt;
      background-color: var(--primary);
      color: var(--dark-0);
      border-radius: 0.5em;
    }
  }
`
