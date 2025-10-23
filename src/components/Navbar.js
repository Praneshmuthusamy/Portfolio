import React from 'react'
import './Navbar.css';
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <div>
    <nav class="container-fluid navbar navbar-expand-lg navbar-light na2 mb-5 ">
  <div class="container-fluid">
    <a class="navbar-brand na1 ms-4" href="#">PRANESH</a>
    <button class="navbar-toggler  na5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse na3 " id="navbarNav">
      <ul class="navbar-nav gap-4">
        <li class="nav-item">
          <a class="nav-link na4 naa"  href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link na4 naa" href="#aboutme">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link na4 naa" href="#projects">Projects</a>
        </li>
        <li class="nav-item ">
           <a class="nav-link na4 naa" href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}


export default Navbar