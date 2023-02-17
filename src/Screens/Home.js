import React from 'react';
import "./Home.css"
import home from '../img/home.png'
import home2 from '../img/home2.png'
import coming from '../img/coming-soon.webp'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            <div>
                <div class="container main mt-5">
                    <div class="row">
                        <div class="col-6 content">
                            <h1 className='h1'>Grab this Great Opportunity</h1>
                            <br />
                            <h2 className='h2'>Learn to speak English with Experts.</h2>
                            <h4 className='h4'>Completely reliable Platform Made By IITians</h4>
                        </div>
                        <div class="col-6">
                            <img src={home} alt="your-image-description" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container main-2 mt-">
                    <div className="row">
                        <div className="col-6">
                            <img src={home2} alt="your-image-description" />
                        </div>
                        <div class="col-6 content-2">
                            <h1 className='h1'>Why Choose Us?</h1>
                            <br />
                            <ul className="list-unstyled">
                                <li><i className=" bi bi-fire"></i>&nbsp;Trending Courses</li>
                                <li><i className="bi bi-star-fill"></i>&nbsp;Live Scheduled Lectures with one to one interaction.</li>
                                <li><i className="bi bi-person-workspace"></i>&nbsp;Classes with online setting.</li>
                                <li><i className="bi bi-people"></i>&nbsp;Discussions Sessions at the end of the week.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container main-3 mt-5">
                    <h1 className='h1'>All our Courses</h1>
                    <p>We provide live affordable classes provide state-of-the-art learning experience by top faculties who will conduct classes with the latest syllabus and provide solutions and solve doubts through best in-class doubt sessions.</p>
                    <div className="card-deck row d-flex justify-content-around">
                        {/* <div className="col-1"></div> */}
                        <div className="card col-4 content-3">
                            <img src={home} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        {/* <div className="col-1"></div> */}
                        <div className="card col-4 content-3">
                            <img src={coming} className="card-img-top" alt="..." />
                            <i class="bi bi-arrow-right-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5 mb-5 main-4 d-flex justify-content-around'>
                <div className=''>
                    <span>
                        <i class="bi bi-bookmark-star"></i> &nbsp; 20+ World Best Instructors
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
                <div className=''>
                    <span>
                        <i class="bi bi-camera-reels"></i> &nbsp; 5+ courses Live Class and Video Lectures
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
                <div className=''>
                    <span>
                        <i class="bi bi-check-circle"></i> &nbsp; 100+ Over Active Students
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
            </div>
            <div className='container row mx-5 mt-5 mb-5 main-5'>
                <h1 className='h1 mb-5 d-flex justify-content-around'>&nbsp; &nbsp; &nbsp; &nbsp; Meet Our Mentors</h1>
                <div class="col-md-4">
                    <div class="card profile-card-3">
                        <div class="background-block">
                            {/* <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background" /> */}
                        </div>
                        <div class="profile-thumb-block">
                            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile" />
                        </div>
                        <div class="card-content">
                            <h2>Justin Mccoy<small>Designer</small></h2>
                            <div class="icon-block"><a href="#"><i class="bi bi-facebook"></i></a><a href="#"> <i class="bi bi-twitter"></i></a><a href="#"> <i class="bi bi-google"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card profile-card-3">
                        <div class="background-block">
                            {/* <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background" /> */}
                        </div>
                        <div class="profile-thumb-block">
                            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile" />
                        </div>
                        <div class="card-content">
                            <h2>Justin Mccoy<small>Designer</small></h2>
                            <div class="icon-block"><a href="/"><i class="bi bi-facebook"></i></a><a href="/"> <i class="bi bi-twitter"></i></a><a href="/"> <i class="bi bi-google"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card profile-card-3">
                        <div class="background-block">
                            {/* <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background" /> */}
                        </div>
                        <div class="profile-thumb-block">
                            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile" />
                        </div>
                        <div class="card-content">
                            <h2>Justin Mccoy<small>Designer</small></h2>
                            <div class="icon-block"><a href="/"><i class="bi bi-facebook"></i></a><a href="/"> <i class="bi bi-twitter"></i></a><a href="/"> <i class="bi bi-google"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
