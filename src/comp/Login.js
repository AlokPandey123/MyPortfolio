import React from 'react';



const Login = () =>{
    return(
        <>
           <section className="vh-100">
            <div className="container-fluid">
            <div className="row">
            <div className="text-white">

               

                <div className="d-flex align-items-center justify-content-center" style={{marginTop: "80px"}}>

                <form style={{width: "26rem",border: "2px solid white"}} className='p-5'>

                    <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Log in</h3>

                    <div className="form-outline mb-4">
                    <input type="email" id="form2Example18" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example18">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                    <input type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example28">Password</label>
                    </div>

                    <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className=" text-light" href="/">Forgot password?</a></p>
                    <p>Don't have an account? <a href="/" className="link-info">Register here</a></p>

                </form>

                </div>

            </div>
            </div>
        </div>
        </section>
    </>
    )
}

export default Login;