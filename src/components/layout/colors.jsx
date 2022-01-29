import { createGlobalStyle } from 'styled-components'

export const GlobalColors = createGlobalStyle`
  body {
    --light: hsl(196, 30%, 95%);
    --light-2: hsl(196, 30%, 90%);
    --light-3: hsl(196, 30%, 85%);
    --light-4: hsl(196, 30%, 80%);

    --dark: hsl(196, 30%, 15%);
    --dark-2: hsl(196, 30%, 15%);
    --dark-3: hsl(196, 30%, 20%);
    --dark-4: hsl(196, 30%, 25%);
  }
`
