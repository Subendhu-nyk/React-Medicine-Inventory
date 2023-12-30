import React,{Fragment, useContext, useState} from "react";
import Card from "../UI/FormButton/Card";
import classes from './AddMedicine.module.css'
import ErrorModal from "../UI/FormButton/ErrorModal";
import CartContext from "../../Store/CartContext";
import { Col, Container, Row, Form,Button } from "react-bootstrap";
const AddMedicine=(props)=>{
    const cartCtx=useContext(CartContext)
    const [quantity,setQuantity]=useState('')
    const [price,setPrice]=useState('')
    const [name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[error,setError]=useState()
    const[isForm,setIsForm]=useState(false)

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

     const formVisibleHandler=()=>{
        setIsForm(true)
     }

    return(
        <Fragment>        
          {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <Container>
            <Row className="mb-2">
                <Col className="pb-2">
                <h2 style={{ fontFamily: "'Playfair Display', serif" ,fontWeight:"bolder",fontSize:'40px'}}>Add Medicine</h2>
                </Col>
            </Row>
           {isForm && <Form onSubmit={AddMedicineHandler}>
            <Row className="mb-3" style={{fontSize:'20px',fontFamily: "'Crimson Text', serif"}}>  
                <Col lg='6'>
                <Form.Group className="mb-3">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control type="text" value={name} id="name" onChange={nameChangeHandler}/>
                </Form.Group>
                </Col>
                <Col lg='6'>
                <Form.Group className="mb-3">
                    <Form.Label>Medicine Description</Form.Label>
                    <Form.Control type="text" value={description} id="description" onChange={descriptioneChangeHandler} />
                </Form.Group>
                </Col>
                <Col lg='6'>
                <Form.Group className="mb-3">
                    <Form.Label>Medicine Price</Form.Label>
                    <Form.Control type="number" value={price} id="price" onChange={priceChangeHandler} />
                </Form.Group>
                </Col>
                <Col lg='6'>
                <Form.Group className="mb-3">
                    <Form.Label>Quantity Available</Form.Label>
                    <Form.Control type="number" value={quantity} id="quantity" onChange={quantityChangeHandler} />
                </Form.Group>
                </Col>
             </Row>
             <Row style={{fontSize:'20px',fontFamily: "'Crimson Text', serif"}}>
                <Col className="text-center"><Button type='submit'variant='success'>+ Add Medicine</Button></Col>
             </Row>
            </Form>}
            {!isForm && 
            <Row>
            <Col className="text-center my-1" style={{ fontFamily: "'Playfair Display', serif" ,fontWeight:"bolder",fontSize:'40px'}}><Button type='button'variant='success' onClick={formVisibleHandler}>+ Add Medicine</Button></Col>
            </Row>}
           
        </Container>
       
        </Card>
        
        </Fragment>
        
    )
}

export default AddMedicine;