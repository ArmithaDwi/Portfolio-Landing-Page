import React from 'react';
import air from "../assets/air.png";
import business from "../assets/business.png";
import ecom from "../assets/ecom.png";

function Project() {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4 mt-3"><b>My Project</b></h2>
                <p className="text-dark text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores <br />ducimus necessitatibus labore odio minima ab nesciunt
                </p>
            </div>

            <div className='project'>
                <div id="project" className="py-3 d-flex">
                    <button type="button" class="btn btn-outline-secondary text-dark">All</button>
                    <button type="button" class="btn btn-outline-secondary text-dark">UI/UX</button>
                    <button type="button" class="btn btn-orange text-light">Web Design</button>
                    <button type="button" class="btn btn-outline-secondary text-dark">App Design</button>
                    <button type="button" class="btn btn-outline-secondary text-dark">Graphic Design</button>
                </div>
            </div>

            <div className='d-flex gap-5 py-5 justify-content-center mb-5'>
                <div className="card">
                    <img src={air} alt="App Design" className="card-img-top" />
                    <div className="card-body">
                        <p className="text-warning">Web Design</p>
                        <p className="card-text"><b>AirCalling Landing Page Design</b></p>
                        <a href="#" className="btn btn-orange text-light mb-5">Detail</a>
                    </div>
                </div>

                <div className="card">
                    <img src={business} alt="App Design" className="card-img-top"/>
                    <div className="card-body">
                        <p className="text-warning">Web Design</p>
                        <p className="card-text"><b>Business Landing Page Design</b></p>
                        <a href="#" className="btn btn-orange text-light mb-5">Detail</a>
                    </div>
                </div>

                <div className="card">
                    <img src={ecom} alt="App Design" className="card-img-top" />
                    <div className="card-body">
                        <p className="text-warning">Web Design</p>
                        <p className="card-text"><b>Ecom Web Page Design</b></p>
                        <a href="#" className="btn btn-orange text-light mb-5">Detail</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
