import React from 'react';


const SignUp = () =>{
    return(
        <section className="">
  
        <div className="d-flex align-items-center justify-content-center">
           
                    <form style={{width: "26rem", border:"2px solid white",padding:"20px"}}>
                        <div className="row">
                        <div className=" mb-4">
                            <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label text-light" for="form3Example1">First name</label>
                            </div>
                        </div>
                        <div className=" mb-4">
                            <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" />
                            <label className="form-label text-light" for="form3Example2">Last name</label>
                            </div>
                        </div>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" />
                        <label className="form-label text-light" for="form3Example3">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" />
                        <label className="form-label text-light" for="form3Example4">Password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label className="form-check-label text-light" for="form2Example33">
                            Subscribe to our newsletter
                        </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4 text-light">
                        Sign up
                        </button>

                        <div className="text-center text-light">
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                        </div>
                    </form>
            </div>
         
      
      
        
     </section>
    )
}

export default SignUp;