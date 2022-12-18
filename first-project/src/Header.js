import React from "react";
import "./Header.css";

// const Header=(props)=>{

export const Header=(props)=>{
    return(
        <>
        <h1 className="header">Hii, my name is {props.name} How are you</h1>
        <h5>my age is {props.age}</h5>
        </>
    )
}
export default Header;