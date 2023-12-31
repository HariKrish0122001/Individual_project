import './login.css';
import React, { useRef, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import userapiservice from '../../services/users/userapiservice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const formRef = useRef();
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
    const isValid = regex.test(mail);

    try {
      const response = await userapiservice.login({ mail, pass });

      if (response.data.message === 'User logged') {
        localStorage.setItem('user_id', response.data.data.id);
        localStorage.setItem('token', response.data.token);
        toast.success('Login Success');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        toast.error('Invalid Credentials');
      }
    } catch (error) {
      toast.error('Account not found');
    }
  }

  return (
    <div className='main'>
      <ToastContainer />
      <div className='img'>
        <img src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?size=626&ext=jpg&ga=GA1.2.497109539.1695125899&semt=sph" alt='blog-img' />
      </div>

      <div className='col'>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '800px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Login</h2>
              <form onSubmit={HandleSubmit} ref={formRef}>
                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => {
                  setMail(e.target.value);
                }} required />
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => {
                  setPass(e.target.value);
                }} required />
                <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Login</MDBBtn>
              </form>
              <a href='/signup'>Don't have an account ?</a>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Login;
