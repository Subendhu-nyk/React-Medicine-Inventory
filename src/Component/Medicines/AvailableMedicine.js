import React from "react";
import Card from "../UI/FormButton/Card";
import classes from '../AddMedicines/MedicineList.module.css'
import MedicineList from "./MedicineList/MedicineList";

const AvailableMedicine = (props) => {
  return (    
    <Card className={classes.products}>
      <h2>Product List</h2>      
      <ul>
        {props.products.map((product) => {
          
            return (<div>
                {/* <li key={product.id}>Product Name: {product.name},Product Description: {product.description} Product Price: {product.price},Product available:{product.quantity}  </li>;
            <Button>Add To Cart</Button> */}
            <MedicineList key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} quantity={product.quantity}/>
            </div>
            )
        })}
    </ul>  
    
    </Card>
  );
};

export default AvailableMedicine;
