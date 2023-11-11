import AddMedicine from "../AddMedicines/AddMedicines";
import AvailableMedicine from "../Medicines/AvailableMedicine";
import MedicineSummary from "./MedicineSummary";

import { Fragment, useState } from "react";

const Medicine =()=>{
    const [toggle,setToggle]=useState(true)
    const [productList,setProductList]=useState([])
  const AddMedicineHandler=(name,description,price,quantity)=>{
    setProductList((prev)=>{
      return [...prev,{name:name,description:description,price:price,quantity:quantity,id:Math.random().toString()}]
    })
  }
  console.log("medicnelist",productList)

    const onclickHandler=()=>{
        setToggle(!toggle)
    }

    return(
        <Fragment> 
        {   
        toggle?<MedicineSummary onClick={onclickHandler}/> :<AddMedicine onAddMedicine={AddMedicineHandler}/>   
        } 
        <AvailableMedicine products={productList} /> 

        </Fragment>
    )
}

export default Medicine;