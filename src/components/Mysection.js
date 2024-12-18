// src/components/MySection.js
import React from 'react';
import Myimage from '../assets/image/png/my-image.png'



const MySection = () => {
    return (
        <section className='section d-flex flex-column align-items-center pt-4'>
            <h2 className='text-heading'>My Section</h2>
            <p className='paragraph'>This is some text in my section.</p>
            <img src={Myimage} alt="image" className='image-hero' />
        </section>
    );
};

export default MySection;