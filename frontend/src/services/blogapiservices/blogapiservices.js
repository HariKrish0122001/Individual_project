import Localhost from "../../https/http";

const blogapiservices={
    fetchuserdata:async(data)=>{
        const user_id=localStorage.getItem('user_id')
        console.log("HELLO")
        try{
        const response= await Localhost.get(`users/fetch/${user_id}`)
        
        return response
    }
    catch(e)
    {
        console.error("error at fetch data",e)
        throw(e)
    }
    }

}
export default blogapiservices;