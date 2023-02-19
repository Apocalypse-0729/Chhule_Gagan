import React from 'react'
import "./Course.css"
import home from '../img/home.png'
import qr from '../img/qr-code.jpeg'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Course() {
    return (
        <div>
            <div className="container main-3 mt-5 rounded">
                <h1 className='h1'>All our Courses</h1>
                <p>We provide live affordable classes provide state-of-the-art learning experience by top faculties who will conduct classes with the latest syllabus and provide solutions and solve doubts through best in-class doubt sessions.</p>
                <div class="col-md-12 content-7">
                    <div class="row g-0 border rounded-5 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary fs-3">English Speaking Course</strong>
                            <h3 class="mb-0">Course Details</h3>
                            <div class="mb-1 text-muted justify-content-around">New Batch Starting from DD/MM/YYYY </div>
                            <p class="card-text fs-4 align-self-start">1. Speak English with experts</p>
                            <p class="card-text fs-4 align-self-start">2. Enhance correct English pronunciation </p>
                            <p class="card-text fs-4 align-self-start">3. Live interaction class individually  </p>
                            <p class="card-text fs-4 align-self-start">4. Group discussions</p>
                            <p class="card-text fs-4 align-self-start">5. Speech Enhancement</p>
                            <p class="card-text fs-4 align-self-start">6. Live drama</p>
                            <p class="card-text fs-4 align-self-start">7. Monday to Friday 30 min class (Regular teaching individually)</p>
                            <p class="card-text fs-4 align-self-start">8. Saturday 60-90 min class (Group discussion)</p>
                            <br/> <br/>
                            <h3 class="mb-0 text-secondary">MRP: Rs <s>1199/month</s></h3>
                            <h3 class="mb-0 text-primary">Exclusive Price: Rs 999/month</h3>
                            <p><a class="btn btn-secondary mt-4" href="/buy">Buy Course &nbsp;<i class="bi bi-arrow-right-circle"></i></a></p>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src={home} width='500' height='450' className='mt-5'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
