import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import {UserContext} from '../App'
import Notifications, {notify} from 'react-notify-toast';


function Login() {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const PostData = () => {
        fetch('/login', {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    notify.show(data.error,'error',1000)
                } else {
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    dispatch({type:"USER",payload:data.user})
                    notify.show(data.message,'success',1000)
                
                    history.push('/')
            }
            }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="login-page">
                <Notifications />
                

                <h1>Login</h1>
                <br />
                
                <div className="inputs">
                    
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <br />
                    
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    
                </div>
                <br />
                <p>Don't have an Account ? <Link to='/signup'>Signup</Link></p>
                <br />

                <div className="signup-btns">
                    <button onClick={()=>PostData()}>Signup</button>
                </div>

            </div>
            

        </>        
    )
}

export default Login
