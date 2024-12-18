// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-4'>
            <p> My <a className='text-decoration-none' href="https://www.yourwebsite.com">Website</a>. All rights reserved.</p>
            <ul>
                <li className='text-black'>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
            </ul>

        </footer>
    );
};

export default Footer;