import React from 'react';
import Navigation from '../componets/Navigation';
import Logo from '../componets/Logo';
import Countries from '../componets/Countries';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;