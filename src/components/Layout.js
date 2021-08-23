import React from 'react';
import Navbar from './Navbar';
// import Search from './Searchbar';
import '../styles/global.css'
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            {/* <Search /> */}
            <div className="content">
                { children }
            </div>
            <Footer />
        </div>
    )
}
