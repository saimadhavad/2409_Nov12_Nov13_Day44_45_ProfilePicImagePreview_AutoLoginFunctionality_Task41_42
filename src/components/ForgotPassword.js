import React from 'react'
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    let navigate = useNavigate();
  return (
    <div className='App forgotPasswordDiv'>
      <form className='forgotPasswordForm'>
            <h1>Forgot Password</h1>
            
            <hr></hr>

            {/* Create NEW PASSWORD DIV */}
            <div className='formGroup'>
              <label>Create New Password &nbsp;<span>*</span></label>
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

              {/* BUTTON CANCEL & SIGNUP DIV */}
              <div className='BTNSubmit'>
                <button type='button' className='cancelBTN'
                  onClick={ () => {
                    navigate('/')
                  }}                
                >Submit</button>
                
              </div>

        </form>
    </div>
  )
}

export default ForgotPassword
