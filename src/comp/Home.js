import React from 'react';
import A from '../img/alok.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';





const Home = () =>{
    
    return(
        <>
            <section className='row ' style={{height:'600px'}}>
                <div className='col-6 m-auto'>
                 <h3><span className='text-warning fs-2'>My</span> <span className='text-danger'>name is</span></h3>
                
                 <div id="runningTextContainer">
                    <h1 id="runningText">Alok Pandey.</h1>
                 </div><br/>
                 <div className='card m-4 p-2 bg-secondary text-light opacity-50%'>Seeking to establish my career as a web developer in the IT sector, I wish
                        to work with an innovative company so that I can upgrade my skill set
                        and knowledge while contributing to the success of an organization.
                 </div><br/>
                 <a className=' font-weight-bold p-2 rounded-4' href='Alok Pandey(3).pdf' id="downloadButtonA" download='Alok Resume' >Download</a>
                 
                </div>
                <div className='col-6 ' id='imageContainer'>
                
                <img src={A} id='alokImage' alt=""style={{height:"400px"}}/>
                <div className='mt-5 fs-3 justify-space-between text-warning w-50 m-auto'>
                    <a href="https://github.com/AlokPandey123"className="iconLink"><FontAwesomeIcon className='col-2'icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/alok-pandey-945999216/"className="iconLink"><FontAwesomeIcon className='col-2'icon={faLinkedin} /> </a>
                    <a href="/"className="iconLink gmailLink"><FontAwesomeIcon className='col-2'icon={faGoogle} /> </a>
                    <a href="https://www.mozilla.com"className="iconLink moNumber"><FontAwesomeIcon className='col-2'icon={faPhone} /> </a>                   

                    </div>
                     
                </div>
            
                
            </section>
        </>
    )
}

export default Home;
