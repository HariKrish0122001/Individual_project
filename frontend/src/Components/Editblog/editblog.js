import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './editblog.css'
import userapiservice from '../../services/users/userapiservice';
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import blogapiservices from '../../services/blogapiservices/blogapiservices';

function EditBlog()
{

  
  const user_id=localStorage.getItem('user_id')
  const blog_id=localStorage.getItem('blog_id')
  const [blogdata,setBlogdata]=useState()
  const [blogtitle,setBlogtitle]=useState()
  const [title,setTitle]=useState(blogtitle)
  const [blog,setBlog]=useState(blogdata)
  
  
  
  const navigate=useNavigate()
  const HandleSubmit= async (e)=>{
    e.preventDefault()
    const editsave=await blogapiservices.save_edit({title,blog,blog_id})
    .then((response)=>{
      console.log(response)
      if(response.data==='Edited successfully')
      {
        toast.success("Edited successfully")
        setTimeout(() => {
          navigate('/dashboard')  
        }, 1200);
        
      }
      else if(response.data==='Empty')
      {
        toast.error("Cannot save the empty")
      }
      else if(response.data==="No changes were made")
      {
        toast.info("No changes made")
        setTimeout(() => {
          navigate('/dashboard')
        }, 1200);
      }
      else{
        toast.error("Failed to save")
      }
    })
  

  }
  const fetchdata=async()=>{
    const response=await blogapiservices.fetchusereditdata(blog_id)
    if(response)
    {
      setBlogdata(response.data[0].blog)
      setBlogtitle(response.data[0].title)
    }
  }
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!token)
    {
      navigate('/')
    }
    fetchdata()
  },[])
  return (
    <>
    <div className='blog_bg'>
      <div className='blog-main'>
        <h2> Edit Blog</h2>
        <ToastContainer/>
      <Form onSubmit={HandleSubmit} className='blog_container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title"  defaultValue ={blogtitle} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Write your thoughts...."  defaultValue ={blogdata} onChange={(e)=>{
          setBlog(e.target.value)
        }} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
    </div>
    </div>
      </>
    
  );
}

export default EditBlog;
