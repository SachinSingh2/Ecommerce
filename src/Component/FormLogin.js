import React, { useState } from "react";
import Image from "../Images/NewRight.png";
import '../css/FormLogin.css'
import { useNavigate } from 'react-router-dom';


export default function FormLogin({setIsUserAuth}) {
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true);
  const [errmsg , seterrmsg] = useState('')


  // Creating a function which will handle the showlogin function
  const handleShowLoginSignup = () => {
    if (showLogin === false) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  };



  // Initial Value of the the signup input and the login input
  const SignUpInitalValue = {
    name:'',
    email:'',
    contact:'',
    password:'',
    confirmpassword:""
  }

  const initialLoginValue = {
    email:'',
    password:''
  }

    // -----------------state of the function 
    const [signUpValue , setSignupValue] = useState(SignUpInitalValue)
    const [login , setlogin] = useState(initialLoginValue)


  // HandleOnChange for signup 
  const handleSignupOnChange = (e) => {
    setSignupValue({...signUpValue , [e.target.name]:e.target.value})
  };
  

  // Submit for signup
  const handleSubmitSignup = async (e)=>{
    e.preventDefault()

    const res = await fetch('http://127.0.0.1:8000/signup' , {
      method:"POST",
      body:JSON.stringify(signUpValue),
      headers:{
        "Content-type":"application/json"
      }
    })

    const body = await res.json()
    console.log(body)

    if(body.status==='Success'){
      setSignupValue(SignUpInitalValue)
      setShowLogin(true)
      seterrmsg(null)
    }

    if (body.status==="Failed" ) {
      seterrmsg(body.message);
      console.log("Sehsdgfvsjdhf");
    }
  }


  // ---------------------------------------------------------------Login---------------------------
  const handleOnLoginChange = (e)=>{
    setlogin({...login , [e.target.name]:e.target.value})
  }

  const handleOnSubmitLogin = async (e)=>{
    e.preventDefault()
    const data = await fetch('http://127.0.0.1:8000/login' , {
      method:"POST",
      body:JSON.stringify(login),
      headers:{
        "Content-type":"application/json"
      }
    })

    const res = await data.json()
    console.log(res)
    if(res.status==="Success"){
      navigate('/')
      setIsUserAuth(true)
    }

  }
  
  
  return (
    <>

{errmsg && (
  <div style={{ textAlign: "center" }} className="alert alert-danger" role="alert">
    {errmsg}
  </div>
)}



    
      {showLogin ? (
        <div className="container">
          <section className="vh-100 container">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                <img  src={Image} className="img-fluid" alt="Phone image" />

                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <h1  style={{ textAlign: "center" , color:"black" }}>Login</h1>
                  {/* OnLogin */}
                  <form onSubmit={handleOnSubmitLogin} >
                    {/* <!-- Email input --> */}
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i style={{color:"black"}} className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <input
                        type="text"
                        id="form3Example1c"
                        name="email"
                        placeholder="Email or Number"
                        className="form-control"
                        onChange={handleOnLoginChange}
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i style={{color:"black"}} className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <input
                        type="password"
                        id="form3Example4c"
                        name="password"
                        placeholder="Password"
                        className="form-control "
                        onChange={handleOnLoginChange}
                      />
                    </div>

                    {/* Set error here */}

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      onClick={handleOnSubmitLogin}
                      className="btn  btn-lg btn-block LoginBtn"
                    >
                      Login in
                    </button>

                    <div
                      className="my-3"
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      <button
                        style={{ width: "100%" }}
                        onClick={handleShowLoginSignup}
                        className="btn btn-light DontHaveAccountBtn "
                      >
                        Don't have account?
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="container">
          {/* ----------------------------------------------------Signup starts here */}


          <section className="vh-100">
            <div className=" h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ boxShadow: "none" }}
                  >
                    <div className="card-body ">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold my-5 mb-1 mx-1 mx-md-4 ">
                            Sign up
                          </p>
{/*---------------------------------------------- Form starts here  */}
                          <form
                          action="/signup"
                            style={{ textAlign: "center" }}
                            className="mx-1 mx-md-4  p-2 my-1 "
                            method="POST"
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                              <input
                                type="text"
                                id="form3Example1c"
                                name="name"
                                placeholder="Your Name"
                                className="form-control "
                                onChange={handleSignupOnChange}
                                value={signUpValue.name || ''}
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <input
                                type="text"
                                id="form3Example1c"
                                name="email"
                                placeholder="Your Email"
                                className="form-control "
                                onChange={handleSignupOnChange}
                                value={signUpValue.email || ''}
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                              <input
                                type="number"
                                id="form3Example4c"
                                name="contact"
                                placeholder="contact"
                                className="form-control "
                                onChange={handleSignupOnChange}
                                value={signUpValue.contact || ''}
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <input
                                type="password"
                                id="form3Example4c"
                                name="password"
                                placeholder="Password"
                                className="form-control "
                                onChange={handleSignupOnChange}
                                value={signUpValue.password || ''}
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <input
                                type="password"
                                id="form3Example4cd"
                                name="confirmpassword"
                                placeholder="Repeat your password"
                                className="form-control"
                                onChange={handleSignupOnChange}
                                value={signUpValue.confirmpassword || ''}
                              />
                            </div>



                            <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-4">
                              <button onClick={handleSubmitSignup} type="button" className="btn  Register">
                                Register
                              </button>
                            </div>

                            <div
                              style={{ textAlign: "center", color: "#3B71D3" }}
                              className="div"
                            >
                              <hr />
                              <button
                                className="btn  AlreadyAccount"
                                onClick={handleShowLoginSignup}
                              >
                                Already have an account?
                              </button>
                            </div>
                          </form>
                          
                          {/* In this code, I've removed the <label> elements and added the placeholder attribute to each input element to specify the placeholder text. */}
                        </div>
                        <div className="  col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src={Image}
                            className="img-fluid"
                            alt="Sample image"
                          />
                        </div>



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
