import React, { Fragment } from "react";
import classes from './Header.module.css'
import medicine from '../../Assets/medicine2.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
 return (
    <Fragment>
        <header className={classes.header}>
        <h1>MedTrack</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={medicine} alt="medicine banner"/>

        </div>
    </Fragment>
 )
}

export default Header;