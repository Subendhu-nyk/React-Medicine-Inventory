import React, { useContext, useEffect } from "react";
import Card from "../UI/FormButton/Card";
import classes from '../AddMedicines/MedicineList.module.css'
import PurchasedList from "./PurchasedList";
import CartContext from "../../Store/CartContext";
import { Container,Row,Col } from "react-bootstrap";

const PurchasedMedicine = () => {
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
            console.log("fetched array",fetchedItems)
            medicineCtx.addPurchasedItems(fetchedItems)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
      },[]);
      console.log(medicineCtx.purchasedItems)
      
  return (    
    <Card className={classes.products}>
    <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight:"bolder", fontSize:'30px'}}>Purchased Product</h2>      
      
        <Container>
        <Row className="mx-1 mt-4 text-center border border-warning bg" style={{ fontFamily: "'Crimson Text', serif",fontSize:'25px',fontWeight:'bolder' }}>
            <Col lg='3'>
                Name
            </Col>              
            <Col lg='3'>
                Price
            </Col>
            <Col lg='3'>
                Quantity
            </Col>
            <Col lg='3'>
                Total
            </Col>
        </Row>
        </Container>
    <ul>
        { console.log("medicineCtx to PurchasedList", medicineCtx)}
      {medicineCtx.purchasedItems[0].map((product) => {
        console.log("Passing product to PurchasedList", product);
        return ( // Add this return statement
          <PurchasedList 
            key={product.id} 
            id={product.id} 
            name={product.name}          
            price={product.price} 
            quantity={product.quantity} 
            total={product.total}
          />       
        );
      })}
    </ul>  
  </Card>
  );
};

export default PurchasedMedicine;
