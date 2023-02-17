import React from 'react';
import "./Home.css"
import home from '../img/home.png'
import home2 from '../img/home2.png'
import qr from '../img/qr-code.jpeg'
import coming from '../img/coming-soon.webp'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Buy() {
    return (
        <div className="container main-3 mt-5 rounded ">
        <div class="row">
    <div class="col-lg-12">
      <img src={qr} class="bd-placeholder-img rounded" width="180" height="240" />
      <h2 class="mt-2">English Speaking Course</h2>
      <p><a class="btn btn-secondary" href="#">SCAN&nbsp;<i class="bi bi-qr-code-scan"></i></a></p>
      <h3 class="mb-0 text-secondary">MRP: Rs <s>1199/month</s></h3>
        <h3 class="mb-0 text-primary">Exclusive Price: Rs 999/month</h3>
    </div>
  </div>
  </div>
    )
}

export default Buy
