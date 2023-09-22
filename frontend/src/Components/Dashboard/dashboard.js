import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blogapiservices from "../../services/blogapiservices/blogapiservices";
import { useEffect, useState } from "react";
import './Dashboard.css'
import EditButton from "../Button/button";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [userdata, setUserdata] = useState([])
  const navigate=useNavigate()
  const [fetchData, setFetchData] = useState(true);
  const fetchuserdata = async () => {
    
    try {
      const user_id = localStorage.getItem('user_id');
      const response = await blogapiservices.fetchuserdata(user_id);
      console.log(response.data)
      setUserdata(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error (e.g., show an error toast)
    }
  }
  useEffect(() => {
     if (fetchData) {
    fetchuserdata();
}
   
  }, [])

  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar/>
      </div>
      <div>
        
       
        {userdata.map((userData, index) => (
          <Card key={index}>
            <Card.Header>{userData.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {userData.blog}
                </p>
                <footer className="blockquote-footer">
                  by<cite title="Source Title">{userData.name}</cite>
                </footer>
                <button onClick={()=>{
                  localStorage.setItem("blog_id",userData.id)
                  navigate('/editblog')
                }}/>
                
              </blockquote>
            </Card.Body>
          </Card>))}

      </div>
    </div>
  )
}
export default Dashboard