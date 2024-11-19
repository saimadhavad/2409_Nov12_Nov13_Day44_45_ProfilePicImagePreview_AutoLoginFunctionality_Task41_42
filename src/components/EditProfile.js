import React, { useState } from 'react'
import TopNavigation from './TopNavigation'


function EditProfile() {
  let [profilePic, setProfilePic] = useState("./images/social.png");
  return (
    <div className='App editProfileDiv'>
        <TopNavigation></TopNavigation>
      <form>
          <h1 className='myProfileHeading'>My Profile</h1>
          <hr></hr>
          <div className='profileDiv'>
          <div>
                {/* Personal Details DIV */}
                <fieldset className='personalDetails'>
                  <legend>Personal Details</legend>
                  {/* FULL NAME DIV */}
                  <div className='formGroup'>
                    <label>Full Name &nbsp;<span>*</span></label>
                    <div className='inputRight'>
                      <input type='text' placeholder='Enter First Name'></input>
                      <input type='text' placeholder='Enter Last Name'></input>
                    </div>
                  </div>

                  {/* GENDER DIV */}
                  <div className='formGroup genderDiv'>
                    <label>Gender &nbsp;<span>*</span></label>
                    <div className='inputRight'>
                      <input type='radio' name='gender'></input>
                      <label>male</label>
                      <input type='radio' name='gender'></input>
                      <label>female</label>
                    </div>
                  </div>

                  {/* MARITAL STATUS DIV */}
                  <div className='formGroup maritalStatusDiv'>
                    <label>Marital Status &nbsp;<span>*</span></label>
                    <div className='inputRight'>
                      <input type='radio' name='maritalStatus'></input>
                      <label>Single</label>
                      <input type='radio' name='maritalStatus'></input>
                      <label>Married</label>
                    </div>
                  </div>

                  {/* AGE DIV */}
                  <div className='formGroup'>
                    <label>Age &nbsp;<span>*</span></label>
                    <div className='inputRight'>
                      <input type='number'></input>
                    </div>
                  </div>

                  {/* CHOOSE A STATE */}
                  <div className='formGroup'>
                    <label>Choose a State &nbsp;<span>*</span></label>
                    <div className='inputRight'>
                    <select name="states" id="states" >
                          <option value="">-----    Select a state    -----</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  </select>
                    </div>
                  </div>

                  {/* LANGUAGES KNOWN DIV */}
                  <div className='formGroup'>
                    <label>Languages Known &nbsp;<span>*</span></label>
                    <div className='inputRight'>
                      <input type='checkbox'></input>
                      <label>Telugu</label>
                      <input type='checkbox'></input>
                      <label>English</label>
                      <input type='checkbox'></input>
                      <label>Hindi</label>
                      <input type='checkbox'></input>
                      <label>Tamil</label>
                      <input type='checkbox'></input>
                      <label>Kannada</label>
                    </div>
                  </div>
                </fieldset>

                {/* CONTACT DETAILS DIV*/}
                <fieldset className='contactDetails'>
                  <legend>Contact Details</legend>
                  {/* EMAIL DIV */}
                <div className='formGroup'>
                  <label>Email &nbsp;<span>*</span></label>
                  <div className='inputRight'>
                    <input type='email' placeholder='Enter Mail ID'></input>
                  </div>
                </div>

                {/* MOBILE NUMBER DIV */}
                <div className='formGroup'>
                  <label>Mobile No. &nbsp;<span>*</span></label>
                  <div className='inputRight'>
                    <input type='number' placeholder='Enter your Mobile no.'></input>
                  </div>
                </div>

                {/* ADDRESS DIV */}
                <div className='formGroup'>
                  <label>Address &nbsp;<span>*</span></label>
                  <div className='inputRight addressDiv'>  
                  
                    <input type="text" placeholder='Street Address'></input>
                    <input type="text" placeholder='Address Line 2'></input> 
                
                    {/* CITY STATE DIV */}
                    <div className='cityStateDiv'>
                      <select name="city" id="city">
                        <option value="">--Select a city--</option>

                        {/* Andhra Pradesh  */}
                        <optgroup label="Andhra Pradesh">
                          <option value="Visakhapatnam">Visakhapatnam</option>
                          <option value="Vijayawada">Vijayawada</option>
                          <option value="Guntur">Guntur</option>
                          <option value="Tirupati">Tirupati</option>
                        </optgroup>

                        {/* Bihar */}
                        <optgroup label="Bihar">
                          <option value="Patna">Patna</option>
                          <option value="Gaya">Gaya</option>
                          <option value="Bhagalpur">Bhagalpur</option>
                        </optgroup>

                        {/* Delhi  */}
                        <optgroup label="Delhi">
                          <option value="New Delhi">New Delhi</option>
                        </optgroup>

                        {/* Gujarat  */}
                        <optgroup label="Gujarat">
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Surat">Surat</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Rajkot">Rajkot</option>
                        </optgroup>

                        {/* Haryana  */}
                        <optgroup label="Haryana">
                          <option value="Gurgaon">Gurgaon</option>
                          <option value="Faridabad">Faridabad</option>
                          <option value="Panipat">Panipat</option>
                        </optgroup>

                        {/* Karnataka */}
                        <optgroup label="Karnataka">
                          <option value="Bangalore">Bangalore</option>
                          <option value="Mysore">Mysore</option>
                          <option value="Mangalore">Mangalore</option>
                          <option value="Hubli">Hubli</option>
                        </optgroup>

                        {/* Kerala */}
                        <optgroup label="Kerala">
                          <option value="Thiruvananthapuram">
                            Thiruvananthapuram
                          </option>
                          <option value="Kochi">Kochi</option>
                          <option value="Kozhikode">Kozhikode</option>
                        </optgroup>

                        {/* Maharashtra */}
                        <optgroup label="Maharashtra">
                          <option value="Mumbai">Mumbai</option>
                          <option value="Pune">Pune</option>
                          <option value="Nagpur">Nagpur</option>
                          <option value="Nashik">Nashik</option>
                        </optgroup>

                        {/* Tamil Nadu */}
                        <optgroup label="Tamil Nadu">
                          <option value="Chennai">Chennai</option>
                          <option value="Coimbatore">Coimbatore</option>
                          <option value="Madurai">Madurai</option>
                          <option value="Tiruchirappalli">Tiruchirappalli</option>
                        </optgroup>

                        {/* Uttar Pradesh */}
                        <optgroup label="Uttar Pradesh">
                          <option value="Lucknow">Lucknow</option>
                          <option value="Kanpur">Kanpur</option>
                          <option value="Varanasi">Varanasi</option>
                          <option value="Agra">Agra</option>
                        </optgroup>

                        {/* West Bengal  */}
                        <optgroup label="West Bengal">
                          <option value="Kolkata">Kolkata</option>
                          <option value="Howrah">Howrah</option>
                          <option value="Durgapur">Durgapur</option>
                          <option value="Siliguri">Siliguri</option>
                        </optgroup>

                        {/* Rajasthan */}
                        <optgroup label="Rajasthan">
                          <option value="Jaipur">Jaipur</option>
                          <option value="Jodhpur">Jodhpur</option>
                          <option value="Udaipur">Udaipur</option>
                          <option value="Kota">Kota</option>
                        </optgroup>

                        /
                        <optgroup label="Telangana">
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Warangal">Warangal</option>
                          <option value="Nizamabad">Nizamabad</option>
                        </optgroup>

                        {/* Punjab  */}
                        <optgroup label="Punjab">
                          <option value="Ludhiana">Ludhiana</option>
                          <option value="Amritsar">Amritsar</option>
                          <option value="Jalandhar">Jalandhar</option>
                          <option value="Patiala">Patiala</option>
                        </optgroup>

                        {/* Other states can be added in the same structure */}
                      </select>
                      <select name="state" id="state">
                        <option value="">
                          --Select a state/region/province--
                        </option>

                        {/* Andhra Pradesh */}
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        {/* Arunachal Pradesh */}
                        <option value="Arunachal Pradesh">
                          {/* Arunachal Pradesh */}
                        </option>
                        {/* Assam */}
                        <option value="Assam">Assam</option>
                        {/* Bihar */}
                        <option value="Bihar">Bihar</option>
                        {/* Chhattisgarh */}
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        {/* Goa */}
                        <option value="Goa">Goa</option>
                        {/* Gujarat */}
                        <option value="Gujarat">Gujarat</option>
                        {/* Haryana */}
                        <option value="Haryana">Haryana</option>
                        {/* Himachal Pradesh */}
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        {/* Jharkhand */}
                        <option value="Jharkhand">Jharkhand</option>
                        {/* Karnataka */}
                        <option value="Karnataka">Karnataka</option>
                        {/* Kerala */}
                        <option value="Kerala">Kerala</option>
                        {/* Madhya Pradesh */}
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        {/* Maharashtra */}
                        <option value="Maharashtra">Maharashtra</option>
                        {/* Manipur */}
                        <option value="Manipur">Manipur</option>
                        {/* Meghalaya */}
                        <option value="Meghalaya">Meghalaya</option>
                        {/* Mizoram */}
                        <option value="Mizoram">Mizoram</option>
                        {/* Nagaland */}
                        <option value="Nagaland">Nagaland</option>
                        {/* Odisha */}
                        <option value="Odisha">Odisha</option>
                        {/* Punjab */}
                        <option value="Punjab">Punjab</option>
                        {/* Rajasthan */}
                        <option value="Rajasthan">Rajasthan</option>
                        {/* Sikkim */}
                        <option value="Sikkim">Sikkim</option>
                        {/* Tamil Nadu */}
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        {/* Telangana */}
                        <option value="Telangana">Telangana</option>
                        {/* Tripura */}
                        <option value="Tripura">Tripura</option>
                        {/* Uttar Pradesh */}
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        {/* Uttarakhand  */}
                        <option value="Uttarakhand">Uttarakhand</option>
                        {/* West Bengal */}
                        <option value="West Bengal">West Bengal</option>

                        {/* Union Territories */}
                        <optgroup label="Union Territories">
                          {/* Andaman and Nicobar Islands */}
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          {/* Chandigarh */}
                          <option value="Chandigarh">Chandigarh</option>
                          {/* Dadra and Nagar Haveli and Daman and Diu  */}
                          <option
                            value="Dadra and Nagar Haveli and Daman and Diu"
                          >
                            Dadra and Nagar Haveli and Daman and Diu
                          </option>
                          {/* Delhi */}
                          <option value="Delhi">Delhi</option>
                          {/* Lakshadweep */}
                          <option value="Lakshadweep">Lakshadweep</option>
                          {/* Puducherry  */}
                          <option value="Puducherry">Puducherry</option>
                          {/* Ladakh */}
                          <option value="Ladakh">Ladakh</option>
                          {/* Jammu and Kashmir */}
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                        </optgroup>
                      </select>
                    </div>

                    {/* POSTAL COUNTRY DIV */}
                    <div className='postalCountryDiv'>
                      <input type="text" placeholder="Postal / Zip Code"/>
                      <select name="country" id="country">
                        <option value="">--Select a country--</option>

                        {/* <!-- India --> */}
                        <option value="India">India</option>

                        {/* <!-- Other countries --> */}
                        <optgroup label="A">
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                        </optgroup>

                        <optgroup label="B">
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                        </optgroup>

                        {/* <!-- C to Z --> */}
                        <optgroup label="C">
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                        </optgroup>

                        {/* <!-- Continue adding countries alphabetically here --> */}

                        {/* <!-- Z --> */}
                        <optgroup label="Z">
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </optgroup>
                      </select>
                    </div>

                  </div>
                </div>

                </fieldset>

                {/* PASSWORD DIV */}
                <fieldset className='changeUpdatePassword'>
                  <legend>Change / Update Password</legend>

                  {/* OLD PASSWORD DIV */}
                  <div className='formGroup'>
                    <label>Old Password</label>
                    <div className='inputRight'>
                      <input type='password'></input>
                    </div>
                  </div>

                  {/* New PASSWORD DIV */}
                  <div className='formGroup'>
                    <label>New Password</label>
                    <div className='inputRight'>
                      <input type='password'></input>
                    </div>
                  </div>

                  {/* CONFIRM NEW PASSWORD DIV */}
                  <div className='formGroup'>
                    <label>Confirm Password </label>
                    <div className='inputRight'>
                      <input type='password'></input>
                    </div>
                  </div>

                </fieldset>
          </div>

          {/* UPLOAD / PREVIEW PHOTO DIV */}
          <div className='formGroup uploadPhotoDiv'>
            <h2>Upload your Photo</h2>
              <div className='fileInput'>
              <input type='file'               
              onChange={ (profileImageEO) => {
                console.log(profileImageEO.target.files);
                let selectedImage = URL.createObjectURL(profileImageEO.target.files[0]);
                console.log(selectedImage);
                setProfilePic(selectedImage);
              }}></input>
              </div>
              <div className='profilePicImage'>
                <img src={profilePic} alt='img'></img>
              </div>
          </div>
          </div>

          {/* SAVE CHANGES & CANCEL BUTTON DIV */}
          <div className='saveChangesCancelBTN'>
                <button type='button' className='saveChangesBTN'>Save Changes</button>
                <button type='button' className='cancelBTN'> Cancel</button>
          </div>
      </form>


    </div>
  )
}

export default EditProfile
