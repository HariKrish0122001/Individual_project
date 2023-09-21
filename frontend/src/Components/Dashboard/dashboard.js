import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blogapiservices from "../../services/blogapiservices/blogapiservices";
import { useEffect, useState } from "react";

function Dashboard() {
  const [userdata, setUserdata] = useState([])
  const fetchuserdata = async () => {
    
    const user_id = localStorage.getItem('user_id')
    const response = await blogapiservices.fetchuserdata(user_id)
    
    setUserdata(response.data)
  }
  useEffect(() => {
   
    fetchuserdata()
  }, [])

  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar />
      </div>
      <div>
       {console.log(userdata.title,userdata.blog)}
        {userdata.map((userData, index) => (
          <Card key={index}>
            <Card.Header>{userData.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {userData.blog}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>))}

      </div>
    </div>
  )
}
export default Dashboard