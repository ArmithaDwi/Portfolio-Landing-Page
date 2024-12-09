import React from 'react';
//import './project.css';
import satu from "../assets/satu.png";
import dua from "../assets/dua.png";
import tiga from "../assets/tiga.png";
import empat from "../assets/empat.png";

function Services() {
    return (
        <div className="color py-3">
            <div className="services text-center mt-3">
                <h2><b>Services</b></h2>
                <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet. <br /> Ligendi cupiditate aliquid omnis, unde, veniam maxime.</p>
            </div>

            <div id="card-flex" className="row justify-content-center">
                <div className="col-md-2 col-sm-6 mb-5">
                    <div id="card-fit" className="card square-card text-start">
                        <div className="card-body">
                            <img src={satu} alt="UI/UX" className="mb-3" />
                            <h5 className="card-title text-dark">UI/UX</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 col-sm-6 mb-5">
                    <div id="card-fit" className="card square-card text-start">
                        <div className="card-body">
                            <img src={dua} alt="Web Design" className="mb-3" />
                            <h5 className="card-title text-dark">Web Design</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 col-sm-6 mb-5">
                    <div id="card-fit" className="card square-card text-start">
                        <div className="card-body">
                            <img src={tiga} alt="App Design" className="mb-3" />
                            <h5 className="card-title text-dark">App Design</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 col-sm-6 mb-5">
                    <div id="card-fit" className="card square-card text-start">
                        <div className="card-body">
                            <img src={empat} alt="Graphic Design" className="mb-3" />
                            <h5 className="card-title text-dark">Graphic Design</h5>
                            <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
