import React from 'react';
//import './project.css';

function Design() {
    return (
        <div id='color2'>
            <div className='mt-5 py-5'>
                <div className="services text-center">
                    <h2><b>Let's Design Together</b></h2>
                    <p className='text-dark mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet. <br /> Ligendi cupiditate aliquid omnis, unde, veniam maxime.</p>
                </div>

                <div id='input'className='mb-4'>
                    <div className='row justify-content-center align-item-center mb-3'>
                        <div className='col-3'>
                            <input type="text" className='form-control' placeholder='Enter Your Email' />
                        </div>
                        <div className='col-auto'>
                            <button className='btn btn-orange' type='submit'>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Design;
