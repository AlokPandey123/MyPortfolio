import React from "react";
import './project.css'
import Project1 from '../img/project1.png'
import Project2 from '../img/Screenshot (13).png'
import Project3 from '../img/Project3.png'
import Project4 from '../img/Project4.png'
import Project6 from '../img/Project6.png'
import Project5 from '../img/Project5.png'

const Project = (e) => {
  
  return(
    <div className="">
      <h1 className="m-5"><span className="text-primary">Proj</span><span className="text-warning">ects</span></h1>
      <div className="d-flex bg-primary">
        <div id="container">
          <img src={Project2} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://coursify-rho.vercel.app/">Project1</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project1} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project2</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project3} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://recipe-book-five-phi.vercel.app/">Project3</a></button>
          </div>
        </div>
      </div>
      <div className="d-flex bg-primary">
        <div id="container">
          <img src={Project4} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://redzet.co.in/">Project4</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project5} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project5</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project6} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://alok-portfolio-ten.vercel.app/">Project6</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project;
