import React from 'react';
//import './project.css';
import "font-awesome/css/font-awesome.min.css";
import orang from "../assets/orang.png";

function Hai() {
    return (
        <section id="hai" className="py-5 d-flex px-5">

            <div className="bungkus">
                <h4>Hi, I'm </h4>
                <h4 className='span'>Fauzi Sayed</h4>
                <h1><b>Website <br />Developer</b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Facere amet at magnam autem magni,
                    consequuntur <br />vitae dolorum et quos labore nemo cupiditate ducimus voluptas.</p>
                <a href="#" class="btn btn-lg btn-orange text-sm">Hire Me</a>
            </div>


            <div className="col-md-6 text-center">
                <img
                    src={orang}
                    alt="Profile"
                    className="orang"
                    width="320"
                    height="350"
                />
                <div className='ikon'>
                    <div className="social-icons mt-4 d-flex">
                        <a href="#"><i className="fa fa-facebook ms-2"></i></a>
                        <a href="#"><i className="fa fa-twitter ms-2"></i></a>
                        <a href="#"><i className="fa fa-instagram ms-2"></i></a>
                        <a href="#"><i className="fa fa-linkedin ms-2"></i></a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hai;
