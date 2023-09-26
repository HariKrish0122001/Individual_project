import Localhost from "../../https/http";

const blogapiservices={
    fetchuserdata:async(data)=>{
        const user_id=localStorage.getItem('user_id')
        console.log("HELLO")
        try{
        const response= await Localhost.get(`blog/fetch/${user_id}`)
        
        return response
    }
    catch(e)
    {
        console.error("error at fetch data",e)
        throw(e)
    }
    },
    fetchusereditdata:async(data)=>{
        try{
            console.log("user",data)
            const response=await Localhost.get(`blog/getblog/${data}`)
            return response
        }
        catch(e)
        {
            console.error(e)
            throw(e)
        }
    },
    save_edit:async(data)=>{
        try{
            console.log("sari da ",data)
            const response=await Localhost.post('blog/editsave',data)
            return response
        }
        catch(e)
        {
            console.error(e)
            throw(e)
        }
    },
    delete_blog:async(data)=>
    {
        try {
            console.log(data)
            const response=await Localhost.put('blog/delete_blog',{id:data})
            console.log(response)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    },
    view_all:async()=>{
        try {
            const response=await Localhost.get('blog/all_users')
            
            return response
        } catch (error) {
            return error
        }
    }

}
export default blogapiservices;