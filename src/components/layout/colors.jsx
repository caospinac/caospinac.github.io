import { createGlobalStyle } from 'styled-components'

export const GlobalColors = createGlobalStyle`
  body {
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);

    --color-1: white;

    --light-0: hsl(0, 0%, 95%);
    --light: hsl(0, 0%, 90%);
    --light-2: hsl(0, 0%, 85%);

    --dark-0: hsl(220, 50%, 10%);
    --dark: hsl(220, 50%, 15%);
    --dark-2: hsl(220, 50%, 20%);

    --primary: hsl(37, 97%, 52%);
    --secondary: hsl(5, 81%, 37%)
  }
`
