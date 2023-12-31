
import Localhost
 from "../../https/http";
 

const userapiservice={
    signup:async(data)=>{
        try{
            const response=await Localhost.post("users/signup",data)
            console.log(response)
            return response
        }
        catch(e)
        {
            console.log(e)
            throw(e)
        }
    },
    login:async(data)=>{
        try{
            
            const response=await Localhost.post("users/login",data)
           
            return response
        }
        catch(e){
            console.log("ERROR")
            throw(e);
        }
    },
    addblog:async(data)=>{
        try{
            const response=await Localhost.post("users/addblog",data)
            return response
        }
        catch(e)
        {
            console.error("Error at catch",e)
        }
    },
    getusername:async(data)=>{
        try{
            console.log(data)
            const response=await Localhost.get(`users/username/${data}`)
            console.log(response)
            return response
        }
        catch(e)
        {
            console.log(e)
            return e 
        }
    }
}
export default userapiservice