import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded';
import IconButton from '@material-ui/core/IconButton'
import UplaodCrush from '../Afterlogin/Upload'
import UploadCrush from '../Afterlogin/Upload';


function UploadCrushBtn() {
const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    return (
        <>
         <div className="upload-crush" id="hide-btn"  onClick={togglePopup}>
                <IconButton>
                <LoyaltyRoundedIcon style={{fontSize:"60px"}} color="secondary"  />
                

                </IconButton>
                
            </div>
            {isOpen && <UploadCrush handleClose={togglePopup} />}
        </>
        
    )
}

export default UploadCrushBtn
