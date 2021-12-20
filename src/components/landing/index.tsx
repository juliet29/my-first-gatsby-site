import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Photos from './photos';
import styles from "./index.module.scss"

const LandingIndex = () => {
    return (
        <section className={styles.section}>
            <Title></Title>
            <Subtitle></Subtitle>
            <Photos></Photos>
        </section>
        
    );
};

export default LandingIndex;