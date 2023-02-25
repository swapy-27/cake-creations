import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function BestSeller(props) {
  return (
    <div className="bestseller_component flex_coloumn">
      <div style={{height:"200px" , width : "300px"}}>
        <img className="cake_image" style={{borderRadius:"16px" }} src={props.image} alt="cake" />
      </div>
      <div style={{display:"flex" , justifyContent:"space-between" , width:"100%" , fontSize:"20px", fontWeight:"bolder",paddingTop:"8px",paddingBottom:"8px" , fontFamily:"serif"}}>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
      <div className="bestseller_discover_button">
        <a href="#contact">
        <span>Order Now</span>
        <ArrowForwardIcon />
        </a>
      </div>
    </div>
  );
}
