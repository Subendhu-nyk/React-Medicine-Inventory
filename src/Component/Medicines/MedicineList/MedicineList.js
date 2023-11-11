import React from "react"
import MedicineQuantityForm from "./MedicineQuantityForm"
import classes from "./MedicineList.module.css"

const MedicineList= props=>{   
    
    const price=`$${props.price}`
    return <li className={classes.medicine}>
        <div><h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
         <MedicineQuantityForm id={props.id} item={props}/>
        </div>
    </li>
}

export default MedicineList