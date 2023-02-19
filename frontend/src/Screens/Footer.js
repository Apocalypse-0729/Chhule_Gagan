import React from 'react'
import './Footer.css'
import Logo from '../img/logo.png'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div>
            <footer class="pt-4 my-md-5 pt-md-5 border-top main-6">
        <div class="row px-3">
          <div class="col-12 col-md">
            <img class="mb-2" src={Logo} alt="" width="120" height="40"/>
            <small class="d-block text-muted">© 2023-2024</small>
            <h6 class="d-block mb-3 text-muted">All Rights Reserved</h6>
          </div>
          <div class="col-4 col-md">
            <h5>Content</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Categories</a></li>
              <li><a class="text-muted" href="/">Courses</a></li>
              <li><a class="text-muted" href="/">Mentors</a></li>
              <li><a class="text-muted" href="/">About Us</a></li>
              {/* <li><a class="text-muted" href="/">Certificates</a></li> */}
            </ul>
          </div>
          <div class="col-8 col-md">
            <h5>Contact</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/"><i class="bi bi-telephone"></i> &nbsp; +XXX XXXX XXXX</a></li>
              <li><a class="text-muted" href="/"><i class="bi bi-envelope-at"></i>&nbsp; chhule.gagan@gmail.com</a></li>
              <li><a class="text-muted" href="/"><i class="bi bi-facebook"></i>&nbsp; Facebook</a></li>
              <li><a class="text-muted" href="/"><i class="bi bi-instagram"></i>&nbsp; Instagram</a></li>
              {/* <li><a class="text-muted" href="/"><i class="bi bi-youtube"></i>&nbsp;</a></li> */}
            </ul>
          </div>
          <div class="col-8 col-md">
            <h5>Support</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Security</a></li>
              <li><a class="text-muted" href="/">Terms and Conditions</a></li>
              <li><a class="text-muted" href="/">Career</a></li>
              <li><a class="text-muted" href="/">Help</a></li>
            </ul>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Footer
