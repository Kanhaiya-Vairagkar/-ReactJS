import React from "react";
import "./Header.css";

const funactionName=(props)=>{
    return(
        <>
        <h1 className="heade">Hii, my name is {props.name}</h1>
        <h5>my age is {props.age}</h5>
        </>
    )
}
export default funactionName;