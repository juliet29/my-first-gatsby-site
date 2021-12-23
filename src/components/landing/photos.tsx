import React, {useEffect, useState} from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
  /* flex-direction: column; */
`;

const ImageGrowAnim = keyframes`
    0% {
    transform: scale(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }

`;

const ImageOverflowHidden = styled.div`
    /* overflow: hidden;
    /* display: flex;
    justify-content: center; 
    border: 10px solid green;
    width: 400px;
    height: 600px;*/
  
`;

const ImageWrapper = styled.div`
    display: inline-block;
    border: 10px solid palegoldenrod;
    width: 400px;
    height: 600px;
    animation-name: ${ImageGrowAnim};
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
    animation-fill-mode: forwards;
    overflow: hidden;
    /* display: flex;
    justify-content: center; */
    
`;

let scrollWidth;
const Image = styled.img`
  height: 600px;
  transform: scale(${props => props.height});
`;






const Photos = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const defaultWidth = 700
    scrollWidth =  1 + (defaultWidth + scrollPosition)/1000


    return (
        <Wrapper>
            {/* <p>
              {scrollWidth}  
            </p> */}
            <ImageOverflowHidden>
            <ImageWrapper height={scrollWidth}>
              
              <Image src="https://placekitten.com/400/600" 
              alt="A kitten"
              width={400}
              height={scrollWidth}
              />
          
      </ImageWrapper>
      </ImageOverflowHidden>
  </Wrapper>
           
            
 );
        
};

export default Photos;