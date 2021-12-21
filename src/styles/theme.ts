import { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components'

// hack untill figure out problem with global styles and typescript...
const darkColor = '#1e1e1e'
const fontFamily = 'Arial, Helvetica, sans-serif'

const mainTheme: DefaultTheme = {
    palette: {
      dark: darkColor,
      light: 'rgb(217, 217, 217)',
      white: "#fff"
    },
    font: {
        sans: fontFamily
    }
  }



  export const GlobalStyle = createGlobalStyle`
    /* *, *:before, *:after {
      box-sizing: border-box;
    }  */
    
    html {
      /* box-sizing: border-box; 
      scroll-behavior: smooth; */
      background-color: ${darkColor};
      font-family: ${fontFamily};
      color: white;
  
    }*/
   body {
      line-height: 1.5;
      letter-spacing: 0;
      background-color: '#f7fafc';
    }
  `
 
 export default mainTheme