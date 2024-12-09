import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import Project from './project';
import Hai from './hai';
import Header from './header';
import Services from './services';
import Design from './design';
import Footer from './footer';


function Container() {
    return (
        <div>
            <Header />
            <Hai />
            <Services />
            <Project />
            <Design />
            <Footer />
            
        </div>
    );
}

export default Container;
