import React, { Fragment } from "react";
import classes from './MedicineSummary.module.css'
import Button from "../UI/FormButton/Button";


const MedicineSummary =(props)=>{    
   
return(<Fragment>
<section className={classes.summary}>
    <h2>Manage Your Medicine Inventory</h2>
    <p>Welcome to MedTrack, your reliable partner in medicine inventory management. At MedTrack, we ensure seamless tracking and management of your pharmaceutical stock.</p>
    <p>Our dedication to accuracy and efficiency guarantees that your inventory is always up-to-date and compliant. Experience the peace of mind that comes with organized and effective medicine inventory control.</p>
    <Button type='submit' onClick={props.onClick}>Open Inventory</Button>
</section> 
</Fragment>
)
}

export default MedicineSummary;