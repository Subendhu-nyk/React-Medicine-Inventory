import React from "react";
import Card from "../UI/FormButton/Card";
import classes from './MedicineList.module.css'
import Button from "../UI/FormButton/Button";

const MedicineList = (props) => {
  return (    
    <Card className={classes.products}>
      <h2>Product List</h2>      
      <ul>
        {props.products.map((product) => {
          
            return (<div><li key={product.id}>Product Name: {product.name},Product Description: {product.description} Product Price: {product.price},Product available:{product.quantity}  </li>;
            <Button>Add To Cart</Button>
            </div>
            )
        })}
    </ul>  
    
    </Card>
  );
};

export default MedicineList;
