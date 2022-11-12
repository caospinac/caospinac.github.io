import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: initial;
    display: initial;

    font-family: 'Montserrat';
    background-color: var(--dark);
    color: var(--color-1);

    h1, h2, h3, h4, h5, h6 {
      margin-top: .5em;
      margin-bottom: .2em;
    }

    h1 {
      font-size: 28pt;
    }

    h2 {
      font-size: 24pt;
    }

    h3 {
      font-size: 20pt;
    }

    h4 {
      font-size: 18pt;
    }

    h5 {
      font-size: 14pt;
    }

    h6 {
      font-size: 12pt;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      display: inline-flex;
      flex-direction: column;
      align-items: center;

      &.link {

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background-color: var(--primary);
          transition: width .2s;
        }
  
        &:hover {
          &::after {
            display: block;
            width: 100%;
          }
        }
      }

    }
  }
`
