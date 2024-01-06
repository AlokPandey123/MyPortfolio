import React from "react";
import './project.css'
import Project1 from '../img/project1.png'
import Project1 from '../img/project2.png'


const Project = (e) => {
  
  return(
    <div className="">
      <h1 className="m-5"><span className="text-danger">Proj</span><span className="text-warning">ects</span></h1>
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
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project1</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project1} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project1</a></button>
          </div>
        </div>
      </div>
      <div className="d-flex bg-primary">
        <div id="container">
          <img src={Project1} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project1</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project1} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project1</a></button>
          </div>
        </div>
        <div id="container">
          <img src={Project1} alt="Avatar" id="image"/>
          <div id="overlay">
          <button id="text"><a href="https://rural-development-website.onrender.com/">Project1</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project;
