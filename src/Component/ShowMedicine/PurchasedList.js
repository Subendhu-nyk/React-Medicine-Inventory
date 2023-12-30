import React, { Fragment, useContext,useEffect } from "react"
import classes from "./MedicineList.module.css"
import { Col, Container, Row } from "react-bootstrap"

const PurchasedList= props=>{      
    console.log("props in purchased list",props)
    const price=`$${props.price}`
    return <Fragment>
          <Container>
        <Row key={props.id} className={`${classes.medicine} mx-1 my-3 text-center`} style={{ fontFamily: "'Crimson Text', serif",fontSize:'25px',fontWeight:'bolder' }}>
            <Col lg='3'>
            {props.name}
            </Col>              
            <Col lg='3'>
            $ {props.price}
            </Col>
            <Col lg='3'>
                {props.quantity}
            </Col>
            <Col lg='3'className={classes.price}>
                $ {props.total}
            </Col>
        </Row>
        </Container>
       
    </Fragment>
   
}

export default PurchasedList