import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blogapiservices from "../../services/blogapiservices/blogapiservices";
import { useEffect, useState } from "react";
import './generalDashboard.css'
import EditButton from "../Button/button";
import { useNavigate } from "react-router-dom";
function Users_Dashboard() {
  const [userdata, setUserdata] = useState([])
  const navigate = useNavigate()
  const [fetchData, setFetchData] = useState(true);

  const fetchuserdata = async () => {
    try {
      
      const response = await blogapiservices.view_all();
      (response.data).map((data,index)=>{
        console.log(data.user.name)
      })
      setUserdata(response.data);
      setFetchData(true)
    } catch (error) {
      console.error("Error fetching user data:", error);
      
    }
  }
//   const deleteblog = async (id) => {
  
//     const confirm = window.confirm("Are you sure do you want to delete this blog?")
//     if (confirm) {
//       try {
//         const del_blog = await blogapiservices.delete_blog(id)
//           .then((response) => {
//             if (response.data === 'blog deleted successfully') {
//               toast.success("Blog deleted successfully")
//               setFetchData(false)
//             }
//             else if (response.data === 'Failed to delete') {
//               toast.error("Failed to delete")
//             }
//             else {
//               toast.error("Failed to delete ,Try again")
//             }
//           })
//       }
//       catch (e) {
//         toast.error("No blogs found in server")
//       }
//     }
//   }
  useEffect(() => {
      const token=localStorage.getItem("token")
      if(!token)
      {
        navigate('/')
      }
      fetchuserdata();
  }, [fetchData])

  
  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar />
      </div>
      <div>
        <br/>


        {userdata.map((userData, index) => (
          <Card key={index}  className="card-container">
            <Card.Header>{userData.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {userData.blog}
                </p>
                <footer className="blockquote-footer">
                  <></>
                  by &nbsp;<cite title="Source Title">{userData.user.name}</cite>
                </footer>
                

              </blockquote>
            </Card.Body>
          </Card>))}

      </div>
    </div>
  )
}
export default Users_Dashboard
