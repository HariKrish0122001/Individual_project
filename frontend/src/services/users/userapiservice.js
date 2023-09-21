import Localhost
 from "../../https/http";
 

const userapiservice={
    login:async(data)=>{
        try{
            console.log(data)
            const response=await Localhost.post("users/login",data)
            console.log(response,"BACKEND")
            return response
        }
        catch(e){
            console.log("ERROR")
            throw(e);
        }
    }
}
export default userapiservice