import React from 'react';
import ServiceCon from '../json/Services.json';


const Services = () => {
    
    return (

        <div>
            <h1><span className='text-warning'>Serv</span><span className='text-primary'>ices</span></h1>
            <div className="d-grid"id="service">   
            {
                ServiceCon.map((el) => {
                    return (
                        <div className="card" style={{ width: "21rem",height:"25rem" }}>
                            <img src={el.img} className="card-img-top" id="servicesImg" style={{height:"200px"}} alt="Alok" />
                            <div className="card-body bg-light">
                                <h5 className="card-title bg-warning">{el.title}</h5>
                                <p className="card-text bg-light">{el.description}</p>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Services;