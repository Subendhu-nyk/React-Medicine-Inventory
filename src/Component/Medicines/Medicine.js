import AddMedicine from "../AddMedicines/AddMedicines";
import AvailableMedicine from "../Medicines/AvailableMedicine";
import MedicineSummary from "./MedicineSummary";

import { Fragment, useState } from "react";

const Medicine =(props)=>{
    
    const [toggle,setToggle]=useState(true)
    const [productList,setProductList]=useState([])
    
  const AddMedicineHandler=(name,description,price,quantity,id)=>{
    setProductList((prev)=>{
      return [...prev,{name:name,description:description,price:price,quantity:quantity,id:id}]
    }) 


  }
  
    const onclickHandler=()=>{
        setToggle(!toggle)
    }

    return(
        <Fragment> 
        {toggle ? (
                <MedicineSummary onClick={onclickHandler} />
            ) : (
                <>
                    <AddMedicine onAddMedicine={AddMedicineHandler} />
                    <AvailableMedicine products={productList} />
                </>
            )} 
        

        </Fragment>
    )
}

export default Medicine;