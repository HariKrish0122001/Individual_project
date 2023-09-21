import axios from 'axios'


const Localhost =axios.create({
    baseURL:"http://localhost:5000/"
})

export default Localhost;