import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const TopNav = () => {
    const {state,dispatch} = useContext(UserContext)
    return (
        <>
            <nav>
                <div className="inner-top-nav">
                <Link to={state?"/":"/home"}><h1>UCrush</h1></Link>
                <Link to="/home"><h4>Dark</h4></Link>
                </div>
            </nav>
            <br/>
            
        </>
        
    );
}

export default TopNav;