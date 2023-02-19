import React from 'react'
import "./About.css"
import founder from '../img/founder.jpg'
import co_1 from '../img/co-found1.jpeg'
import co_2 from '../img/co-found2.jpeg'
import co_3 from '../img/co-found3.jpeg'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div>
            <div class="bg-light">
                <div class="container py-5">
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-12">
                            <h1 class="display-4">About Us</h1>
                                <div class="col-lg-12 ">
                                    <img class="rounded-circle" src={founder} alt="Generic placeholder image" width="140" height="140" />
                                    <h2>Founder</h2>
                                    <h4>Dr. Shashikant Das</h4>
                                    <h6>Phd-IIT Roorkee</h6> 
                                    <h6>M.Tech-IIT Kharagpur | B.Tech-NIT Calicut</h6>
                                </div>
                            <div class="row mt-5 justify-content-around">
                                <div class="col-lg-3 rounded-5 border pt-3 shadow card-my">
                                    <img class="rounded-circle" src={co_1} alt="Generic placeholder image" width="140" height="140" />
                                    <h2>Co-Founder</h2>
                                    <h4>Mr. Sunil</h4>
                                    <p>B.Tech-IIT Roorkee</p>
                                </div>
                                <div class="col-lg-3 rounded-5 border pt-3 shadow card-my">
                                    <img class="rounded-circle" src={co_2} alt="Generic placeholder image" width="140" height="140" />
                                    <h2>Co-Founder</h2>
                                    <h4>Mr. Deepesh</h4>
                                    <p>B.Tech-IIT Roorkee</p>
                                </div>
                                <div class="col-lg-3 rounded-5 border pt-3 shadow card-my">
                                    <img class="rounded-circle" src={co_3} alt="Generic placeholder image" width="140" height="140" />
                                    <h2>Co-Founder</h2>
                                    <h4>Mr. Ayush</h4>
                                    <p>B.Tech-IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-4 d-none d-lg-block"><img src={about} alt="" class="img-fluid rounded-5" /></div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
