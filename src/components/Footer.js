import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mb-0">
                <p class="col-md-4 mb-0 text-muted">© All Rights Reserved for Pranesh</p>
                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item">
                        <Link to="" class="nav-link px-2 fo1 ">Home</Link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 fo1">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 fo1">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 fo1">Contact</a>
                    </li>
                </ul>
                <div class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis gap-4">
                 <Link to='https://www.linkedin.com/in/praneshm-/'>
                    <i class="fa-brands fa-linkedin fo1"></i>
                 </Link>
                 <Link to="https://github.com/Praneshmuthusamy">
                 <i class="fa-brands fa-github fo1"></i>
                 </Link>
                 <Link to="mailto:praneshmuthusamy09062003@gmail.com" data-type="mailto" data-id="mailto:praneshmuthusamy09062003@gmail.com"><i class="fa-solid fa-envelope fo1"></i></Link>
                </div>
            </footer>
        </div>
    </div>
  )
}


export default Footer