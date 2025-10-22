import React, { useState } from 'react'
import './Home.css';
import img1 from '../images/delight1.jpeg'
import img2 from '../images/leadgen1.jpeg'
import { useEffect } from "react";
import {Link} from 'react-router-dom';
const Homee = () => {
   useEffect(() => {
    const menu = document.querySelector(".menu");
    const toggle = document.querySelector(".toggle");

    const handleClick = () => {
      menu.classList.toggle("active");
    };

    if (toggle) toggle.addEventListener("click", handleClick);

    // cleanup to remove listener on unmount
    return () => {
      if (toggle) toggle.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
          <div class="d-flex justify-content-center">
        <div class=" container row row-cols-lg-2 row-cols-sm-1 my-5 py-5 px-0">
            <div class="col  my-5">
                 <span class='ho1 p-0 col'>Hi, I'm </span>
               <span class='ho2 p-0 col'>Pranesh M </span>
               <h5 class='ho3 col p-0'>I'm passionate about <span className='ho4'>Building Digital Experience..</span></h5>
               <p class='ho5 col p-0'>I'm enthusiastic about discovering new digital technologies and expanding my knowledge of innovative, creative design principles. My curiosity drives me to continuously learn about modern technologies and their potential to create meaningful experiences.</p> 
              <div class=" row row-cols-1 row-cols-md-3 gap-4 mb-5">
              <button class='ho6 col p-3'>Resume</button>
              <button class='ho7 col p-3 '>Connect with me &rarr; </button>
            </div>
            </div>  
            <div class="col d-flex justify-content-center align-items-center px-0">
                 <div class="menu   p-0">
                    <div class="toggle">
                      <h5 class="fs-5">SKILLS</h5>
                    </div>
  
                    <li className='hi0'>
                        <a href="#"><i class="fa-brands fa-html5 fs-1"></i></a>
    </li>
    <li className='hi1'>
      <a href="#"><i class="fa-brands fa-css3-alt fs-1"></i></a>
    </li>
    <li className='hi2'>
      <a href="#"><i class="fa-brands fa-js fs-1"></i></a>
    </li>
     <li className='hi3'>
      <a href="#"><i class="fa-brands fa-bootstrap fs-1"></i></a>
    </li>
    <li className='hi4'>
      <a href="#"><i class="fa-brands fa-react fs-1"></i></a>
    </li>
    <li className='hi5'>
      <a href="#"><i class="fa-brands fa-node fs-2"></i></a>
    </li>
    <li className='hi6'>
      <a href="#"><i class="fa-brands fa-github fs-1"></i></a>
    </li>
    <li className='hi7'>
      <a href="#"><i class="fa-solid fa-database fs-1"></i></a>
    </li>
</div>
            </div>
        </div>
    </div>
        {/* ------------------------------------------------------------------------------- */}
               <div class='d-flex flex-column align-items-center div3 mt-5 pt-5 border-top border-primary'>
          <h1 class="ho9 ">About <span className='ho10'>Me</span></h1>
          <hr class=" ho11 " />
        </div>
               <div class="d-flex justify-content-center">
                
        <div class=" container row row-cols-lg-2 row-cols-1 py-5 section1 ">
            <div class="col  my-5 div4 py-5">
                <h2>My Journey</h2>
              <p>I'm a recent Computer Science and Engineering graduate  living in Coimbatore, driven by a passion for turning creative ideas into functional software solutions.</p>
              <p>My academic journey and 4 month of focused exploration have equipped me with foundational knowledge across various development areas. I'm especially fascinated by creating intuitive digital experiences that feel seamless to the user.</p>
              <p>I'm actively building my skill set: I contribute to open-source projects, dedicate time to learning about emerging technologies, and am constantly picking up new skills to accelerate my professional growth.</p>
            </div>  
            <div class="col d-flex justify-content-center align-items-center">
                <div class="row row-cols-1 row-cols-md-2 g-4 div5">
  <div class="col">
    <div class="card">
      <div class=" mt-4 mb-2 ms-3 rounded-pill w-auto iconn">
      <i class="fa-solid fa-rocket "></i>
      </div>
      <div class="card-body">
        <h5 class="card-title">Problem Solver</h5>
        <p class="card-text">I approach complex challenges with analytical thinking and break them down into manageable solutions. </p>
      </div>
    </div>
  </div>
  <div class="col">
     <div class="card">
      <div class=" mt-4 mb-1 ms-3 rounded-pill w-auto iconn">
      <i class="fa-solid fa-people-group"></i>
      </div>
      <div class="card-body">
        <h5 class="card-title">Team Worker</h5>
        <p class="card-text">I align my individual efforts with the team's overarching mission, adapting my approach to best support my colleagues.</p>
      </div>
    </div>
  </div>
  <div class="col">
     <div class="card">
      <div class=" mt-4 mb-2 ms-3 rounded-pill w-auto iconn">
      <i class="fa-regular fa-lightbulb"></i>
      </div>
      <div class="card-body">
        <h5 class="card-title">Innovative Thinker</h5>
        <p class="card-text">I constantly explore new technologies and approaches to solve problems more efficiently.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class=" mt-4 mb-1 ms-3 rounded-pill w-auto iconn">
     <i class="fa-solid fa-chart-column"></i>
      </div>
      <div class="card-body">
        <h5 class="card-title">User-Focused</h5>
        <p class="card-text">I prioritize creating intuitive, accessible experiences that meet real user needs.</p>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
        {/* ------------------------------------------------------------------------------- */}
                     <div class='d-flex flex-column align-items-center div3 mt-5 pt-5 border-top border-primary'>
          <h1 class="ho9 ">My <span className='ho10'>Projects</span></h1>
          <hr class=" ho11 " />
          <p class="w-25 text-center text-light">Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.</p>
        </div>
    <div class="container gap-4 card-group div6">
  <div class="card ho12">
    <img src={img1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Delight Foods Clone</h5>
      <p class="card-text text-justify">Developed a semi functional e-commerce clone of the Delight Foods platform. This project showcases proficiency in HTML, CSS, BOOTSTRAP AND REACT JS to handle product browsing, and a modern, responsive UI/UX.</p>
    </div>
    <div class="card-footer">
     <a href="#" class="text-decoration-none ho13"><i class="fa-brands fa-github "></i> Code</a>
    </div>
  </div>
  <div class="card ho12">
    <img src={img2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">LeadGen</h5>
      <p class="card-text">A detailed design and front-end recreation of the LeadGen website, meticulously replicating its visual identity and user experience. The focus was on creating a seamless, high-fidelity mock-up of an furniture shopping destination.</p>
    </div>
    <div class="card-footer">
     <a href="#" class="text-decoration-none ho13"><i class="fa-brands fa-github "></i> Code</a>
    </div>
  </div>
  <div class="card ho12">
    <img src={img1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Delight Foods Clone</h5>
      <p class="card-text">Developed a semi functional e-commerce clone of the Delight Foods platform. This project showcases proficiency in HTML, CSS, BOOTSTRAP AND REACT JS to handle product browsing, and a modern, responsive UI/UX.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="text-decoration-none ho13"><i class="fa-brands fa-github "></i> Code</a>
    </div>
  </div>
</div>
 <div class='d-flex flex-column align-items-center div3  pt-5 '>
          <button class='ho7 align-item-center'>View More Projects <i class="fa-brands fa-github fs-4"></i></button>
             </div>
{/* ------------------------------------------------------------------------------------------------------------------- */}
  <div class='d-flex flex-column align-items-center div3 mt-5 pt-5 border-top border-primary'>
    <h1 class="ho9 ">Technical <span className='ho10'>Skills</span></h1>
    <hr class=" ho11 " />
    <p class="w-25 text-center text-light">I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.</p>
  </div>
  <div class="col d-flex justify-content-center align-items-center px-0">
    <div class="menu p-0 active">
      <div class="toggle">
        <h5 class="fs-5">SKILLS</h5>
      </div>
      <li class="hi0">
        <a href="#"><i class="fa-brands fa-html5 fs-1"></i></a>
      </li>
      <li class="hi1">
        <a href="#"><i class="fa-brands fa-css3-alt fs-1"></i></a>
      </li>
      <li class="hi2">
        <a href="#"><i class="fa-brands fa-js fs-1"></i></a>
      </li>
      <li class="hi3">
        <a href="#"><i class="fa-brands fa-bootstrap fs-1"></i></a>
      </li>
      <li class="hi4">
        <a href="#"><i class="fa-brands fa-react fs-1"></i></a>
      </li>
      <li class="hi5">
        <a href="#"><i class="fa-brands fa-node fs-2"></i></a>
      </li>
      <li class="hi6">
        <a href="#"><i class="fa-brands fa-github fs-1"></i></a>
      </li>
      <li class="hi7">
        <a href="#"><i class="fa-solid fa-database fs-1"></i></a>
      </li>
    </div>
  </div>
  {/* ----------------------------------------------------------------------------------- */}
  <div class='d-flex flex-column align-items-center div3 mt-5 pt-5 border-top border-primary'>
    <h1 class="ho9 ">Connect <span className='ho10'>With Me</span></h1>
    <hr class=" ho11 " />
    <p class="w-25 text-center text-light">Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!</p>
  </div>
   <div class="d-flex justify-content-center">
        <div class=" container row row-cols-lg-4 row-cols-2 mt-5 ">
            <div class="col">
                    <div class="card  ho14  ">
                       <Link to="https://github.com/Praneshmuthusamy" class="text-center p-4"><i class="fa-brands fa-github fs-1"></i></Link>
                        <div class="card-body">
                            <h5 class="card-title text-center h6 fw-bold ">Github</h5>
                        </div>
                    </div>    
            </div>  
            <div class="col">
                    <div class="card  ho14">
                        <Link to='https://www.linkedin.com/in/praneshm-/' class="text-center p-4"><i class="fa-brands fa-linkedin fs-1"></i></Link>
                        <div class="card-body">
                            <h5 class="card-title text-center  h6 fw-bold ">LinkedIn</h5>
                        </div>
                    </div>
            </div>
            <div class="col">  
                    <div class="card  ho14">
                       <Link to="mailto:praneshmuthusamy09062003@gmail.com" class="text-center p-4"><i class="fa-solid fa-envelope fs-1"></i></Link>
                        <div class="card-body">
                            <h5 class="card-title text-center  h6 fw-bold ">Email</h5>
                        </div>
                    </div>
                
            </div>
            <div class="col">
                    <div class="card  ho14">
                        <Link to="https://x.com/Pranesh09062003" class="text-center p-4"><i class="fa-brands fa-twitter fs-1"></i></Link>
                        <div class="card-body">
                            <h5 class="card-title text-center  h6 fw-bold ">Twitter</h5>
                        </div>
                    </div>
            </div> 
        </div>
    </div>     


    </div>
    
   
  )
}


export default Homee