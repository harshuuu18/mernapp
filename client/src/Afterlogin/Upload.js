import { IconButton } from '@material-ui/core'
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'



function UploadCrush(props) {
    const history = useHistory()
    const [name,setName] = useState("")
    const [gender,setGender] = useState("")
    const [year,setYear] = useState("")

    const PostDetails = () => {
        fetch('/createpost', {
            method: "post",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                name,
                gender,
                year
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                    window.location.reload();


            
            }).catch(err => {
            console.log(err)
        })
    }
    
    return (
        <>
            <div className="upload-main" >
                <div className="cancel-div">
                    <IconButton><div onClick={props.handleClose}>X</div></IconButton>
                </div>
                <div className="upload-it">
                    <div className="tutorial-upload">
                        <p>Upload Your CRUSH Name, Gender & Year</p>
                    </div>
                    <div className="crush-name1">
                    <input type="text" className="crush-name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your Crush Name" />
                    </div>
                    <br />
                    
                    <div className="inputs1 for-spans">
                    <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}} id=""/><span style={{color:"red"}}>Male</span>
                    <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}} id=""/><span>Female</span>
                    </div>
                    <br />
                    <div className="inputs1 for-spans">
                    <input type="radio" name="year" value="First Year" onChange={(e)=>{setYear(e.target.value)}} id=""/><span>I</span>
                    <input type="radio" name="year" value="Second Year" onChange={(e)=>{setYear(e.target.value)}} id=""/><span>II</span>
                    <input type="radio" name="year" value="Third Year" onChange={(e)=>{setYear(e.target.value)}} id=""/><span>III</span>
                    </div>
                </div>
                <br/>
                <div className="upload-btns">
                    <IconButton><button onClick={()=>PostDetails()}>Upload</button> </IconButton>
                </div>

            </div>
            
        </>
    )
}

export default UploadCrush
