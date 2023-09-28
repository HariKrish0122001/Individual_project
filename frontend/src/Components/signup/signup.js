
import React, { useRef, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import './signup.css' 
import userapiservice from '../../services/users/userapiservice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPassword] = useState('');
  const [isValid, setValid] = useState('');
  const [isValid1, setValid1] = useState('');
  const formRef = useRef();
  const navigate = useNavigate();

  const validPassword = (e) => {
    const value = e.target.value;
    const passwordvalid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    if (!passwordvalid.test(value)) {
      setValid('Password is weak');
    } else if (value === null) {
      setValid('');
    } else {
      setValid('');
      setPassword(value);
    }
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await userapiservice.signup({ username, mail, pass });
      if (register.data.message === 'response success') {
        toast.success('Account created successfully');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else if (register.data.message === 'username or mail id already exists') {
        toast.error('Mail id already exists');
        formRef.current.reset();
      } else {
        toast.error('Failed to register, try again');
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Signup catch error', error);
    }
  }

  return (
    <div className='main'>
      <div>
        <ToastContainer />
        <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '800px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form onSubmit={HandleSubmit} ref={formRef}>
                <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e) => {
                  setUsername(e.target.value);
                }} />
                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => {
                  setMail(e.target.value);
                }} />
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => { validPassword(e) }} />
                {isValid ? (
                  <span className="invalid">{isValid}</span>
                ) : (
                  <span className="valid"></span>
                )}
                <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' onChange={(e) => { validPassword(e) }} />
                {isValid1 ? (
                  <span className="invalid">{isValid1}</span>
                ) : (
                  <span className="valid"></span>
                )}
                <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
              </form>
              <a href='/'>Already have an account ?</a>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
      <div className='col-5' >
        <img className='signin'src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="image-side" />
      </div>
    </div>
  );
}

export default Signup;
