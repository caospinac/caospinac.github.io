import styled from 'styled-components'

export const Caption = styled.span`
  position: absolute;
  font-style: italic;
  font-size: 10pt;
  color: var(--light-2);
  opacity: 0;
  top: 2rem;

  transition: all .2s;
`

export const SkillsSection = styled.section`
  position: relative;
  align-items: center;
  text-align: center;

  &:hover {
    ${Caption} {
      top: 0;
      opacity: 1;
    }
  }
`

export const CloudWrapper = styled.div`
  padding: 1.3rem 0;
  width: 100%;
  height: 350px;

  & > div > svg {
    height: inherit;
    width: inherit;
  }
`
