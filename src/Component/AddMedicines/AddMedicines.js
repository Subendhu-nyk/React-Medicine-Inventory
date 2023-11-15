import React,{useContext, useState} from "react";
import Card from "../UI/FormButton/Card";
import classes from './AddMedicine.module.css'
import Button from "../UI/FormButton/Button";
import ErrorModal from "../UI/FormButton/ErrorModal";
import CartContext from "../../Store/CartContext";
const AddMedicine=(props)=>{
    const cartCtx=useContext(CartContext)
    const [quantity,setQuantity]=useState('')
    const [price,setPrice]=useState('')
    const [name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[error,setError]=useState()

    const AddMedicineHandler=(event)=>{
        event.preventDefault()
        // console.log("details>>",id,price,name,category)
        if(quantity.trim().length===0||name.trim().length===0||price.trim().length===0||description.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid inputs (non-empty values)"
            })
            return
        }
        if(+quantity<1||+price<1){
           setError({
            title:"Invalid Id or Price",
                message:"Please enter a valid id or price (non-empty values)"
           
           })
            return
        }
        let id=Math.random().toString()
        props.onAddMedicine(name,description,price,quantity,id)
        let count=0;
        const obj={name,description,price,quantity,count,id}
        cartCtx.addItem(obj)
     
    // cartCtx.addItem({...props.item})
    // console.log("cartCtx.item",cartCtx)   
    // if(existingItem>=0){
    //     setQty(cartCtx.items[existingItem].quantity)
    // }
    // else{
    //     setQty("No stock available")
    //     return;
    // }
 console.log("cartctx in addmedicine",cartCtx)

        setQuantity("")
        setPrice('')
        setName('')
        setDescription('')
        
    }

    const quantityChangeHandler=(event)=>{
        event.preventDefault()
      
        setQuantity(event.target.value)
    }
    const priceChangeHandler=(event)=>{
        event.preventDefault()
        
        setPrice(event.target.value)
    }

    const nameChangeHandler=(event)=>{
        event.preventDefault()
        
        setName(event.target.value)
    }

    const descriptioneChangeHandler=(event)=>{
        event.preventDefault()
        
        setDescription(event.target.value)
    }

  
     const errorHandler=()=>{
        setError(null)
     }

    return(
        <div>
          {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <h4>Add Medicine</h4>
        <form onSubmit={AddMedicineHandler}>
            <label htmlFor="name">Medicine Name</label>
            <input type="text" value={name} id="name" onChange={nameChangeHandler}/>
            <label htmlFor="description">Medicine Description</label>
            <input type="text" value={description} id="description" onChange={descriptioneChangeHandler}/>            
            <label htmlFor="price">Medicine Price</label>
            <input type="number" value={price} id="price" onChange={priceChangeHandler}/>
            <label htmlFor="quantity">Quantity Available</label>
            <input type="number" value={quantity} id="quantity" onChange={quantityChangeHandler}/>            
            <Button type='submit'>Add Medicine</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddMedicine;