import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home_container'>
            <div className='home_header'>
                {< Header />}
            </div>
            <div className='home_body'>
                <p>ESTO ES EL BODY</p>
            </div>
            <div className='home_footer'>
                {< Footer />}
            </div>
        </div>
    )
}

export default Home;