import './login.css'
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';

function Login() {
  const [mail,setMail]=useState()
  const [pass,setPass]=useState()
  return (
    
    // <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://unsplash.com/photos/jLwVAUtLOAQ)'}}>
    <div className='main'>
        <div className='col-6 img'>
        <img src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?size=626&ext=jpg&ga=GA1.2.497109539.1695125899&semt=sph" alt='blog-img'/>
    </div>
    <div className='col-2'></div>
        <div className='col-4'>
    <MDBContainer fluid className='d-flex align-items-center justify-content'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5'>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
       
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
          <a href='/signup'>Don't have an account ?</a>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
    </div>
  );
}

export default Login;