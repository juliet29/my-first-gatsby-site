// Step 1: Import React
import React, {ReactNode, useEffect, useState} from 'react';
import LandingIndex from 'components/landing'
import mainTheme from 'styles/theme'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'




interface BackgroundColorProps{
  lightBg: boolean;
}
const BackgroundColor = styled.html.attrs(props =>
  ({
    lightBg: props.lightBg 
  })
)<BackgroundColorProps>`
  background-color: ${props => props.lightBg ? props.theme.palette.light : props.theme.palette.dark};
`;

// export default BackgroundWrapper;



const IndexPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lightBg, setLightBg] = useState(false)
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position)
        setLightBg(position > 150 ? true : false)
        
    };

    
    console.log("scrollPosition", scrollPosition)
    console.log(lightBg)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const defaultWidth = 700
    let scrollWidth =  1 + (defaultWidth + scrollPosition)/1000
    

  return (
      <ThemeProvider theme={mainTheme}>
       
        <BackgroundColor lightBg={lightBg}>
          <GlobalStyle/>
          <LandingIndex scrollWidth={scrollWidth}></LandingIndex>
        </BackgroundColor>
      </ThemeProvider>
  
     
  )
}

// Step 3: Export your component

export default IndexPage