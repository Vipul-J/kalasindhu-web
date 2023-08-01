import React, { useRef } from 'react';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core'; 
import '../assets/styles/core.css'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import t1 from '../assets/images/t1.png';

const Team = () => {
    const splideRef = useRef(null);

    return (
        <section style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
            <div className="container p-3">
                <h2 className="text-center" style={{ color: 'rgba(197, 158, 112, 1)' }}>Meet our Team</h2> 
                <Splide
                    options={{
                        type: 'loop',
                        drag: 'free',
                        focus: 'center',
                        perPage: 4,
                        rewind: true,
                        autoplay: true, // Enable continuous auto-scrolling
                        interval: 1200, // Set the interval time in milliseconds (e.g., 3000ms = 3 seconds)
                    }}
                    ref={splideRef}
                >
                    <SplideSlide className='me-3'>
                        <img src={t1} alt="Slide 1" height="250" style={{ borderRadius: '12px' }} />
                        <figcaption className="figcaption">Gowri2222<p className="mb-0" style={{ fontSize: '12px' }}>Music Teacher</p></figcaption>
                        <div className="small-desc">
                            <h4>Gowri Vishwanath</h4>
                            <p>Gowri Vishwanath is a highly experienced music faculty with 40 years of teaching experience. She started learning Carnatic music at the age of 4 from her father and went on to study under renowned musicians like Narasimha Murthy, Jayashree Parthasarathy.</p>
                            <a href="#" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Know more</a>
                        </div>
                    </SplideSlide>

                    <SplideSlide className='me-3'>
                        <img src={t1} alt="Slide 1" height="250" style={{ borderRadius: '12px' }} />
                        <figcaption className="figcaption">Gowri2222<p className="mb-0" style={{ fontSize: '12px' }}>Music Teacher</p></figcaption>
                        <div className="small-desc">
                            <h4>Gowri Vishwanath</h4>
                            <p>Gowri Vishwanath is a highly experienced music faculty with 40 years of teaching experience. She started learning Carnatic music at the age of 4 from her father and went on to study under renowned musicians like Narasimha Murthy, Jayashree Parthasarathy.</p>
                            <a href="#" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Know more</a>
                        </div>
                    </SplideSlide>

                    <SplideSlide className='me-3'>
                        <img src={t1} alt="Slide 1" height="250" style={{ borderRadius: '12px' }} />
                        <figcaption className="figcaption">Gowri2222<p className="mb-0" style={{ fontSize: '12px' }}>Music Teacher</p></figcaption>
                        <div className="small-desc">
                            <h4>Gowri Vishwanath</h4>
                            <p>Gowri Vishwanath is a highly experienced music faculty with 40 years of teaching experience. She started learning Carnatic music at the age of 4 from her father and went on to study under renowned musicians like Narasimha Murthy, Jayashree Parthasarathy.</p>
                            <a href="#" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Know more</a>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='me-3'>
                        <img src={t1} alt="Slide 1" height="250" style={{ borderRadius: '12px' }} />
                        <figcaption className="figcaption">Gowri2222<p className="mb-0" style={{ fontSize: '12px' }}>Music Teacher</p></figcaption>
                        <div className="small-desc">
                            <h4>Gowri Vishwanath</h4>
                            <p>Gowri Vishwanath is a highly experienced music faculty with 40 years of teaching experience. She started learning Carnatic music at the age of 4 from her father and went on to study under renowned musicians like Narasimha Murthy, Jayashree Parthasarathy.</p>
                            <a href="#" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Know more</a>
                        </div>
                    </SplideSlide>

                </Splide>
            </div>  
            {/* <!-- Modal1 --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal2 --> */}
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath2</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal3 --> */}
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath3</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal4 --> */}
            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath4</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal5 --> */}
            <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal6 --> */}
            <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal7 --> */}
            <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style={{ backgroundColor: 'rgba(197, 158, 112, 1)' }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Our Team</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>Gowri Vishwanath</h4>
                                    <p>Gowri Vishwanath is a highly experienced music faculty with 40
                                        years of teaching experience. She started learning Carnatic music at the age of
                                        4
                                        from her father and went on to study under renowned musicians like Narasimha
                                        Murthy,
                                        Jayashree Parthasarathy.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-dark" data-bs-dismiss="modal">Close</button> 
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Team;
