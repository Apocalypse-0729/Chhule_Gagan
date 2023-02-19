import React from "react";
import "./Home.css";
import home from "../img/home.png";
import home2 from "../img/home2.png";
import coming from "../img/coming-soon.webp";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div>
            <div>
                <div class="container px-5 mt-5 main">
                    <div class="row gx-5 align-items-center">
                        <div
                            class="col-lg-6 aos-init aos-animate content"
                            data-aos="fade-up"
                        >
                            <h1 className="h1">Grab this Great Opportunity</h1>
                            <h2 className="h2">Learn to speak English with Experts.</h2>
                            <h4 className="h4">
                                Completely reliable Platform Made By IITians
                            </h4>
                        </div>
                        <div
                            class="col-lg-6 d-none d-lg-block aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img class="img-fluid" src={home} alt="..." />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div class="container px-5 main-2 mt-3 rounded">
                    <div class="row gx-5 align-items-center">
                        <div
                            class="col-lg-6 d-none d-lg-block aos-init aos-animate"
                            data-aos="fade-up"
                        >
                            <img src={home2} alt="your-image-description" />
                        </div>
                        <div
                            class="col-lg-6 aos-init aos-animate content-2"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h1 className="h1">Why Choose Us?</h1>
                            <br />
                            <ul className="list-unstyled">
                                <li>
                                    <i className=" bi bi-fire"></i>&nbsp;Trending Courses
                                </li>
                                <li>
                                    <i className="bi bi-star-fill"></i>&nbsp;Live Scheduled
                                    Lectures with one to one interaction.
                                </li>
                                <li>
                                    <i className="bi bi-person-workspace"></i>&nbsp;Classes with
                                    online setting.
                                </li>
                                <li>
                                    <i className="bi bi-people"></i>&nbsp;Discussions Sessions at
                                    the end of the week.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container main-3 mt-5 rounded">
                    <h1 className="h1">All our Courses</h1>
                    <p>
                        We provide live affordable classes provide state-of-the-art learning
                        experience by top faculties who will conduct classes with the latest
                        syllabus and provide solutions and solve doubts through best
                        in-class doubt sessions.
                    </p>
                    <div class="row">
                        <div class="col-lg-6">
                            <img
                                src={home}
                                class="bd-placeholder-img rounded"
                                width="180"
                                height="180"
                            />

                            <h2 class="mt-2">English Speaking Course</h2>
                            <p>
                                Some representative placeholder content for the three columns of
                                text below the carousel. This is the first column.
                            </p>
                            <p>
                                <a class="btn btn-secondary" href="/course">
                                    View Course details &nbsp;
                                    <i class="bi bi-arrow-right-circle"></i>
                                </a>
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <img
                                src={coming}
                                class="bd-placeholder-img rounded"
                                width="180"
                                height="180"
                            />

                            <h2 class="mt-2">More Courses</h2>
                            <p>
                                Another exciting bit of representative placeholder content. This
                                time, we've moved on to the second column.
                            </p>
                            <p>
                                <a class="btn btn-secondary" href="/">
                                    Coming Soon &nbsp;<i class="bi bi-arrow-right-circle"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5 main-4 d-flex justify-content-around">
                <div className="">
                    <span>
                        <i class="bi bi-bookmark-star"></i> &nbsp; 20+ World Best
                        Instructors
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
                <div className="">
                    <span>
                        <i class="bi bi-camera-reels"></i> &nbsp; 5+ courses Live Class and
                        Video Lectures
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
                <div className="">
                    <span>
                        <i class="bi bi-check-circle"></i> &nbsp; 100+ Over Active Students
                    </span>
                    {/* <h6 className='h6'>20</h6> */}
                </div>
            </div>
            <div class="row main-4 mx-5 justify-content-around">
                <h1 class="h1">All our Mentors</h1>
                <br />
                <br />
                <div class="col-lg-3 content-4 py-4 rounded">
                    <img
                        class="rounded-circle"
                        src={home}
                        alt="Generic placeholder image"
                        width="180"
                        height="180"
                    />
                    <h2>Name</h2>
                    <p>Designer</p>
                    <div class="icon-block text-light">
                        <a href="#">
                            <i class="bi bi-facebook mx-2"></i>
                        </a>
                        <a href="#">
                            {" "}
                            <i class="bi bi-twitter mx-2"></i>
                        </a>
                        <a href="#">
                            {" "}
                            <i class="bi bi-google mx-2"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 content-4 py-4 rounded">
                    <img
                        class="rounded-circle"
                        src={home}
                        alt="Generic placeholder image"
                        width="180"
                        height="180"
                    />
                    <h2>Name</h2>
                    <p>Designer</p>
                    <div class="icon-block text-light">
                        <a href="#">
                            <i class="bi bi-facebook mx-2"></i>
                        </a>
                        <a href="#">
                            {" "}
                            <i class="bi bi-twitter mx-2"></i>
                        </a>
                        <a href="#">
                            {" "}
                            <i class="bi bi-google mx-2"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 content-4 py-4 rounded">
                    <img
                        class="rounded-circle"
                        src={home}
                        alt="Generic placeholder image"
                        width="180"
                        height="180"
                    />
                    <h2>Name</h2>
                    <p>Designer</p>
                    <div class="icon-block text-light">
                        <a href="#">
                            <i class="bi bi-facebook mx-2"></i>
                        </a>
                        <a href="#">
                            {" "}
                            <i class="bi bi-twitter mx-2"></i>
                        </a>
                        <a href="#">
                            {" "}
                            <i class="bi bi-google mx-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
