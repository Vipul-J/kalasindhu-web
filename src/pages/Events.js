import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/styles/core.css'
import eveImg from '../assets/images/Desktop - 7.png'
import eveImg2 from '../assets/images/Desktop - 6.png'
import eveImg3 from '../assets/images/Desktop - 5.png'
import eveImg4 from '../assets/images/desktop-4.png'
import Footer from '../components/Footer'

function Events() {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(21, 56, 26)' }}>
                <Navbar />
                <section className='hero-wrapper position-relative'>
                    <img src={eveImg} className='img-fluid' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section>
                <section className='hero-wrapper position-relative mb-4'>
                    <img src={eveImg2} className='img-fluid' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section>
                <section className='hero-wrapper position-relative mt-4'>
                    <img src={eveImg3} className='img-fluid' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section>
                <section>
                    <div style={{ backgroundColor: '#330A0A' }}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h1 className='text-white display-5 fw-bolder mt-5'>Workshops and other events</h1>
                                    <p className='text-white fs-4'>
                                        In memory of her beloved guru Narmada , Nirantara narmada came into existence Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut.
                                    </p>
                                    <a className="btn btn-md btn-warning rounded">Connect with us</a>
                                </div>
                                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                    <img src={eveImg4} height={400} alt='Hero Image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        </>

    )
}

export default Events