import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Categories from '../Cards/Categories';
import Products from '../Cards/Products';
import '../../styles/Navbar.css';
import '../../styles/Home.css';

function Home() {
    return (
        <div className='home_container'>
            <div className='home_header'>
                <Header />
            </div>
            <div className='home_body'>
                <Navbar />
            </div>
            <div className='categories_body'>
                <Categories />
            </div>
            <div className='cards_body'>
                <Products />
            </div>
            <div className='home_footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;