import Button from 'react-bootstrap/Button';
import AddBlog from '../Addblog/addblog';
import { useNavigate } from 'react-router-dom';
import EditBlog from '../Editblog/editblog';

function EditButton({data})
{   
    console.log(data.blog,"EDIT BUTTON")
    const navigate=useNavigate()
    const HandleClick=()=>{ 
        <EditBlog data={data}/>
        navigate('/editblog')

        
}
    return(
        <Button name='BUTTON' onClick={HandleClick}>EDIT</Button>
    )
}
export default EditButton