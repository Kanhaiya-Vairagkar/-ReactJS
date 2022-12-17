import React from "react";
import "./Header.css";

const Header=(props)=>{
    return(
        <>
        <h1 className="header">hii, my name is {props.name}</h1>
        <h5>my age is {props.age}</h5>
        </>
    )
}
export default Header;