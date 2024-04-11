import { Button } from "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios' //http request and response
import { useNavigate } from "react-router-dom";

function Login(){
    //const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password}) //page deoes not refresh on submit
        .then(result =>{
            console.log(result)
            if(result.data === "Login Success"){
                navigate('/home')
            }
        })
        .catch(err=>console.log(err))
       
    }
    return (       
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                   
                    <Link>Forgot Password</Link> 
                    <button className="btn btn-success border w-100 rounded-0">
                        Login
                    </button>
                    
                </form>
                
                    
            </div>
        </div>
    )
}

export default Login
