// Step 1: Import React
import * as React from 'react'
import LandingIndex from 'components/landing'
import mainTheme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'



const IndexPage = () => {
  return (
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle/>
          <LandingIndex></LandingIndex>
      </ThemeProvider>
  
     
  )
}

// Step 3: Export your component

export default IndexPage