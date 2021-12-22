import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
`;


const Photos = () => {
    return (
        <Wrapper>
            <StaticImage src="https://placekitten.com/800/600" 
        alt="A kitten"
        layout="fixed"
        width={400}
        height={600}
        />
        </Wrapper>
 );
        
};

export default Photos;