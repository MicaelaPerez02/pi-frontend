import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Categories from '../Cards/Categories';
import Products from '../Cards/Products';
import '../../styles/Components/Home.css';
import GetUser from '../User/GetUser';
import useFetchAuth from '../../hooks/useFetchAuth';

function Home() {
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);

    data.map((users) => {
        if (users.email == JSON.parse(localStorage.getItem("username"))) {
            return (
                localStorage.setItem("userId", users.id), 
                localStorage.setItem("name", users.name),
                localStorage.setItem("surname", users.surname),
                localStorage.setItem("city", users.city)
            )
        }
    })
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