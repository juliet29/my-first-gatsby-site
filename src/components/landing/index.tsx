import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Photos from './photos';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.palette.dark};
  color: ${({ theme }) => theme.palette.white};
`;

const LandingIndex = () => {
    return (
        <Section>
            <Title></Title>
            <Subtitle></Subtitle>
            <Photos></Photos>
        </Section>
        
    );
};

export default LandingIndex;