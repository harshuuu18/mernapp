import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const MainPage = () => {
    return (
        <>
            <div className="extra-div">

            </div>
            <div className="main-page">
                <div className="log-sign-btns">
                        <Link to='/login'><Button className="log-btn" variant="contained" color="secondary">
                        Login
                        </Button></Link>
                        <Link to="/signup"><Button className="sign-btn" variant="contained" color="primary">
                            Signup
                        </Button></Link> 
                </div>

                <div className="intro">
                    <h5>@rahuuul_18</h5>
                    <h4>"Yes! I got my Crush name</h4>
                </div>
                <div className="steps">
                    <h2>Step-1</h2>
                    <h4>Signup with your Name & Email</h4>
                </div>
                <div className="steps">
                    <h2>Step-2</h2>
                    <h4>Post Your Crush's Name</h4>
                </div>
                <div className="steps">
                    <h2>Step-3</h2>
                    <h4>Let the Party Begin</h4>
                </div>
                <div className="steps">
                    <h2>Note!</h2>
                    <h3>Only For <span style={{ color:"red"}}>Khaitanians</span></h3>
                </div>
                
            </div>
        </>
        
    );
}

export default MainPage;


