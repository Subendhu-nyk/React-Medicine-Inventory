import React, { useContext, useEffect } from "react";
import Card from "../UI/FormButton/Card";
import classes from '../AddMedicines/MedicineList.module.css'
import PurchasedList from "./PurchasedList";
import CartContext from "../../Store/CartContext";

const PurchasedMedicine = (props) => {
    const medicineCtx=useContext(CartContext)
    useEffect(() => {
        console.log("fetch called")
        fetch('https://medicine-3d3dd-default-rtdb.firebaseio.com/medicine.json', {
            method: 'GET'
        })  
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
                      
           console.log("fetched data",data)
           const fetchedItems = [];
            for (const key in data) {  
              console.log("key", key);
              fetchedItems.push({
                id: key,
                name: data[key].name,
                price: data[key].price,
                quantity:data[key].quantity,
                total: data[key].total
              });
            }
            medicineCtx.addPurchasedItems(fetchedItems)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
      },[]);
      
  return (    
    <Card className={classes.products}>
      <h2 style={{ fontFamily: "'Playfair Display', serif" ,fontWeight:"bolder",fontSize:'30px'}}>Purchased Product</h2>      
      <ul>
        {medicineCtx.PurchasedItems.map((product) => {
          
            return (<div>
                {/* <li key={product.id}>Product Name: {product.name},Product Description: {product.description} Product Price: {product.price},Product available:{product.quantity}  </li>;
            <Button>Add To Cart</Button> */}
           <PurchasedList key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} quantity={product.quantity} total={product.total}/> 
            
            </div>
            )
        })}
    </ul>  
    
    </Card>
  );
};

export default PurchasedMedicine;
