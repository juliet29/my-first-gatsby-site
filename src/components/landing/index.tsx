import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Photos from './photos';
import styled from 'styled-components';

const Section = styled.section`
  /* color: ${({ theme }) => theme.palette.white}; */
`;

interface LandingIndexProps {
   scrollWidth: number;
}


const LandingIndex:React.FC<LandingIndexProps> = ({scrollWidth}) => {
    return (
        <Section>
            <Title></Title>
            <Subtitle></Subtitle>
            <Photos scrollWidth={scrollWidth}></Photos>
        </Section>
        
    );
};

export default LandingIndex;