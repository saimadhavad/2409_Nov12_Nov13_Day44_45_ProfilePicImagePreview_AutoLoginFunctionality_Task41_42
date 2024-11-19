import React, { useEffect, useRef } from 'react'
import userSigninImage from '../images/profile-user.png'
import { Link, useNavigate } from 'react-router-dom'


function Signin() {

    let emailInputRef = useRef();
    let passwordInputRef = useRef();

    let navigate = useNavigate()


    useEffect( () => {

        // LOCAL STORAGE
        emailInputRef.current.value = localStorage.getItem("Email");
        passwordInputRef.current.value = localStorage.getItem("Password");

        // if(localStorage.getItem("Email") && localStorage.getItem("Password")) {
        //     // loginValidate();
        // }

        // SESSION STORAGE
        // emailInputRef.current.value = sessionStorage.getItem("Email");
        // passwordInputRef.current.value = sessionStorage.getItem("Password");

        // if(sessionStorage.getItem("Email") && sessionStorage.getItem("Password")) {
        //     // loginValidate();
        // }
    
    },[])
    let loginValidate = () => {
        let email = emailInputRef.current.value;
        let password = passwordInputRef.current.value;

        if(email == "dsmv@gmail.com" && password == "dsmv"){

            // ASSIGNING VALUES INTO LOCAL STOTRAGE
            localStorage.setItem("Email",email);
            localStorage.setItem("Password",password);

            // ASSIGNING VALUES INTO SESSION STOTRAGE
            sessionStorage.setItem("Email",email);
            sessionStorage.setItem("Password",password);

            navigate('/dashboard',{state:{msg:"Hello DSMV! 🌿"}});
        } else {
            alert("Invalid Email / Password");
        }
    }

  return (
    <div className='App signINDiv'>
        <form className='signINForm'>
            <h1>Signin Form</h1>
            <img src={userSigninImage} className='signINFormImage' alt='SignIN-Profile-Image-Logo'></img>

            {/* USERNAME DIV */}
            <div className='formGroup'>
                <label>Username <span>*</span></label>
                <div className='inputRight'>
                    <input type='text' ref={emailInputRef}></input>
                </div>
            </div>

            {/* PASSWORD DIV */}
            <div className='formGroup'>
                <label>Password <span>*</span></label>
                <div className='inputRight'>
                    <input type='text' ref={passwordInputRef}></input>
                </div> 
            </div>

            {/* REMEMBER ME DIV */}
            <div className='inputRight'>
                    <input type='checkbox'></input>
                    <label>Remember me</label>
            </div>

            {/* SIGNIN DIV */}
            <div className='formGroup'>
                <button className='signINBTN' type='button'
                    onClick={ () => {loginValidate();}} >Signin</button>
            </div>

            {/* FORGOT PASSWORD & SIGNUP DIV */}
            <div className='formGroup'>
                <span className='textColor'>Forgot</span> <Link to={'/forgotpassword'}>Password?</Link><br/>
                <span className='textColor'>Don't have an account?</span> <Link to={"/signup"}>Sign Up</Link>
            </div>
        </form>
    </div>
  )
}

export default Signin
