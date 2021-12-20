import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Photos from './photos';
import {section} from "./index.module.scss"

const LandingIndex = () => {
    return (
        <section className={section}>
            <Title></Title>
            <Subtitle></Subtitle>
            <Photos></Photos>
        </section>
        
    );
};

export default LandingIndex;