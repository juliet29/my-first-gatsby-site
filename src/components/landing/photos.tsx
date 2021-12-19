import React from 'react';
import { StaticImage } from "gatsby-plugin-image"


const Photos = () => {
    return (
        <StaticImage src="https://placekitten.com/800/600" 
        alt="A kitten"
        layout="fixed"
        width={800}
        height={600}
        />
    );
};

export default Photos;