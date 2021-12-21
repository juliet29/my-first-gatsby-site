import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.palette.white};
`;

const Line = styled.div`
    background-color: ${props => props.theme.palette.white};
    height: 1px;
`;



const Title = () => {
    return (
        <Wrapper>
            <Line></Line>
            <H1>
            Daria Izbash 
            </H1>
            <Line></Line>
        </Wrapper> 
    );
        
};

export default Title;