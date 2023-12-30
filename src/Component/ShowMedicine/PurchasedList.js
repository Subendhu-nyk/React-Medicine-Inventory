import React, { Fragment, useContext,useEffect } from "react"
import classes from "./MedicineList.module.css"

const PurchasedList= props=>{      
    console.log("props in purchased list",props)
    const price=`$${props.price}`
    return <Fragment>
         <li className={classes.medicine} key={props.id}>
        <div><h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>        
        </div>
    </li>
    </Fragment>
   
}

export default PurchasedList