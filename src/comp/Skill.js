import React from "react";
import './Skill.css';
const Skill = () =>{
  
    return(
        <div className="row  text-light mt-5">
          <h1 ><span className="text-primary">Ski</span><span className="text-warning">lls</span></h1>
          <div className="col-6">
            <h2 className=""><span className="text-info">Technical</span><span className="text-danger">Skills</span></h2>
            <div className="row" id="skillCon">
              <div className="col-2"></div>
              <div className="col-2 text-start ">
                <h4 className="textSkill">HTML</h4>
                <h4 className="textSkill ">CSS</h4>
                <h4 className="textSkill ">JavaScript</h4>
                <h4 className="textSkill ">React.js</h4>
                <h4 className="textSkill ">Node.js</h4>
                <h4 className="textSkill ">Express.js</h4>
                <h4 className="textSkill ">MongoDB </h4>
                <h4 className="textSkill ">SQL</h4>
                <h4 className="textSkill ">Bootstrap</h4>
                <h4 className="textSkill ">Java + DSA</h4>
                
              </div>
              <div className="col-6">
                <div className="progress mb-5">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                </div>

                <div className="progress mb-5">
                  <div className="progress-bar " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                </div>

                <div className="progress mb-5">
                  <div className="progress-bar w-75" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="progress mb-5">
                  <div className="progress-bar w-75" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="progress mb-5">
                  <div className="progress-bar w-75" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="progress mb-5">
                 <div className="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="progress mb-5">
                 <div className="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="progress mb-5">
                 <div className="progress-bar w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-5">
                 <div className="progress-bar w-50" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-5">
                 <div className="progress-bar " role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
                </div>
              </div>
               
            </div>

          </div>
          <div className="col-6">
            <h2 className=""><span className="text-info">Soft</span><span className="text-danger">Skills</span></h2>
            <div className="row w-75 m-auto">
              <div className="col-6 ml-3">
                <div className="box">
                 <div id="ui-widgets">
                  <div id="ui-values">75%</div><br></br>
                 </div>
                 <div id="ui-labels">Communication Skill</div>
                </div>
                <div className="box">
                 <div id="ui-widgets">
                  <div id="ui-values">99%</div><br></br>
                 </div>
                 <div id="ui-labels">Work ethic</div>
                </div>
                <div className="box">
                 <div id="ui-widgets">
                  <div id="ui-values">75%</div><br></br>
                 </div>
                 <div id="ui-labels">Problem Solving</div>
                </div>
              </div>
              <div className="col-3">
              <div className="box">
                 <div id="ui-widgets">
                  <div id="ui-values">99%</div><br></br>
                 </div>
                 <div id="ui-labels">Hard Working</div>
                </div>
                <div className="box">
                 <div id="ui-widgets">
                  <div id="ui-values">80%</div><br></br>
                 </div>
                 <div id="ui-labels">Project Management</div>
                </div>
                <div className="box">
                 <div id="ui-widgets">
                  <div id="ui-values">95%</div><br></br>
                 </div>
                 <div id="ui-labels">Active Listening</div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Skill;