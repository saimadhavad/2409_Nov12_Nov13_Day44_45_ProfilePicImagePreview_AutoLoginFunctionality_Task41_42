import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

  let navigate = useNavigate();

  return (
    <div className='App signUPDiv'>
        <form className='signUPForm'>
            <h1>Sign Up Form</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            {/* EMAIL DIV */}
            <div className='formGroup'>
              <label>Email &nbsp;<span>*</span></label>
              <div className='inputRight'>
                <input type='text' placeholder='Enter Email'></input>
              </div>
            </div>

            {/* PASSWORD DIV */}
            <div className='formGroup'>
              <label>Password &nbsp;<span>*</span></label>
              <div className='inputRight'>
                <input type='text' placeholder='Enter Password'></input>
              </div>
            </div>

             {/* REPEAT PASSWORD DIV */}
             <div className='formGroup'>
              <label>Repeat Password &nbsp;<span>*</span></label>
              <div className='inputRight'>
                <input type='text' placeholder='Repeat Password'></input>
              </div>
            </div>

            {/* REMEMBER ME DIV */}            
             <div className='inputRight rememberMeDiv'>
                <input type='checkbox'></input>
                <label>Remember me</label>
              </div>

              {/* TERMS & POLICY DIV */}
              <div className='inputRight termsAndPolicyDiv'>
              <span>By creating an account you agree to our</span> <Link to={"/termsandpolicy"}>Terms & Privacy</Link>.
              </div>

              {/* BUTTON CANCEL & SIGNUP DIV */}
              <div className='BTNCancelSignUP'>
                <button type='button' className='cancelBTN'
                  onClick={ () => {
                    navigate('/')
                  }}                
                >Cancel</button>
                <button type='button' className='signUPBTN'
                  onClick={ () => {
                    navigate('/')
                  }}                
                >Sign Up</button>
              </div>

        </form>
    </div>
  )
}

export default Signup
