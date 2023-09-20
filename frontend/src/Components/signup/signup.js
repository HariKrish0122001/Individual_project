import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './signup.css' 
function Signup() {
  const [username,setUsername]=useState()
  const [mail,setMail]=useState()
  const [pass,setPassword]=useState()
  const [isValid,setValid]=useState()

  const validPassword=(e)=>{
    const value=e.target.value
    console.log(value)
    const passwordvalid=/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
    if(!passwordvalid.test(value))
    {
      console.log(value,typeof(value))
      console.log(passwordvalid.test(value))
      setValid("Password must contain atleast 1 capital,1 number,1 special character and minimum 8 characters")
    }
    else if(value===" "){
      console.log('sdfsdf')
      setValid("")
    }
    else{
      setValid("")
    }


  }
  return (
    // <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://unsplash.com/photos/jLwVAUtLOAQ)'}}>
    <div className='main'>
        <div>
    <MDBContainer fluid className='d-flex align-items-center justify-content'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e)=>{
            setUsername(e.target.value)
          }}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e)=>{
            setUsername(e.target.value)
          }}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e)=>{validPassword(e)}}/>
          {isValid ? (
        <span className="invalid">{isValid}</span>
      ) : (
        <span className="valid"></span>
      )}
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' onChange={(e)=>{validPassword(e)}}/>
          {isValid===" "? (
        <span className="invalid">{isValid}</span>
      ) : (
        <span className="valid"></span>
      )}
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          <a href='/'>Already have an account ?</a>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
    <div className='img'>
        <img src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="image-side"/>
    </div>

    </div>
  );
}

export default Signup;