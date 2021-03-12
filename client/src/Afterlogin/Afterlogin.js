import React, { useContext, useEffect, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Like from '../img/like.png'
import Liked from '../img/liked.png'
import Boy from '../img/boy.png'
import Girl from '../img/girl.png'
import {UserContext} from '../App'

function Afterlogin() {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)

    useEffect(() => {
        fetch('/allpost', {
            headers: {
            "Authorization":"Bearer " + localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
            .then(result => {
           console.log(result)
           setData(result.posts)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const LikePost = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId:id
            })

        }).then(res=>res.json())
            .then(result => {
                const newData = data.map(item => {
                    if (item._id == result._id) {
                    return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
            console.log(err)
        })
    }
    const UnlikePost = (id) => {
        fetch('/unlike', {
            method: "put",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId:id
            })

        }).then(res=>res.json())
            .then(result => {
                const newData = data.map(item => {
                    if (item._id == result._id) {
                    return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            {
                data.map(item => {
                    return (
                        <>
                            <div className="home-page" key={item._id} >
                                <div className="home-page3" >
                                    <div className="home-page-dp" style={{backgroundImage:`url(${(item.gender == "male")?Boy:Girl})`}}>
                                        
                                    </div>
                                </div>
                                <div className="home-page1">
                                    <h3>{item.name} </h3>
                                    <h5>{item.year} </h5>
                                    <h5>{item.likes.length} ❤ </h5>
                                </div>
                                <div className="home-page2" >
                                    
                                        {item.likes.includes(state._id)
                                        ?<IconButton onClick={()=>{UnlikePost(item._id)}} ><img src={Liked} style={{width:"40px"}}   alt=""/></IconButton>
                                        :<IconButton onClick={()=>{LikePost(item._id)}} ><img src={Like} style={{width:"40px"}}  alt=""/></IconButton>
                                        }
                                        
                                    
                                </div>
                        </div>
                            <div className="likes-show">
                                <p>{item.likes.length} People also Has Crush on {(item.gender == "male")?"him":"her"} </p>    
                            </div>
                            
                       <br/>
                        
                        </>
                    )
                })
            }
           
        </>    
    )
}

export default Afterlogin
