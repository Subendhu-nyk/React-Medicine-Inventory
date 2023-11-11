import React,{useState} from "react";
import Card from "../UI/FormButton/Card";
import classes from './AddMedicine.module.css'
import Button from "../UI/FormButton/Button";
import ErrorModal from "../UI/FormButton/ErrorModal";
const AddMedicine=(props)=>{
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
        props.onAddMedicine(name,description,price,quantity)
        setQuantity("")
        setPrice('')
        setName('')
        setDescription('')
        
    }

    const quantityChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setQuantity(event.target.value)
    }
    const priceChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setPrice(event.target.value)
    }

    const nameChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setName(event.target.value)
    }

    const descriptioneChangeHandler=(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setDescription(event.target.value)
    }

  
     const errorHandler=()=>{
        setError(null)
     }

    return(
        <div>
          {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
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