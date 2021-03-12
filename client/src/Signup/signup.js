import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import Notifications, {notify} from 'react-notify-toast';


function Signup() {
    const history = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [gender,setGender] = useState("")
    const [year,setYear] = useState("")
    
    const PostData = () => {
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
                gender,
                year
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notify.show(data.error,'error',1000)
                    
                } else {
                    notify.show(data.message,'success',1000)
                    
                    history.push('/login')
            }
            }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="signup-page">
                 
                <Notifications />

                <h1>Join Us</h1>
                <br />
                
                <div className="inputs">
                    <input type="text" placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <br />
                    
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <br />
                    
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    
                </div>
                <br />
                
                <div className="inputs1">
                    <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}} id=""/><span>Male</span>
                    <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}} id=""/><span>Female</span>
                    <label htmlFor="">Gender</label>
                </div>
                <br />
            
                <div className="inputs1">
                    <input type="radio" name="year" value="First Year" onChange={(e)=>{setYear(e.target.value)}} id=""/><span>I</span>
                    <input type="radio" name="year" value="Second Year" onChange={(e)=>{setYear(e.target.value)}} id=""/><span>II</span>
                    <input type="radio" name="year" value="Third Year" onChange={(e)=>{setYear(e.target.value)}} id=""/><span>III</span>
                    <label style={{width: "40px"}} htmlFor="">Year</label>
                </div>
                <br />
                <p>Already have an Account ? <Link to='/login'>Login</Link></p>
                <div className="signup-btns">
                    <button onClick={()=>PostData()}>Signup</button>
                </div>

            </div>
            

        </>        
    )
}

export default Signup
