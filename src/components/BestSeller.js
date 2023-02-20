import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function BestSeller(props) {
  return (
    <div className="bestseller_component flex_coloumn">
      <div style={{height:"200px" , width : "300px"}}>
        <img className="cake_image" style={{borderRadius:0 }} src={props.image} alt="cake" />
      </div>
      <div style={{display:"flex" , justifyContent:"space-between" , width:"100%"}}>
        <p>{props.name}</p>
        <p>450/-</p>
      </div>
      <div className="discover_button">
        <span>Order Now</span>
        <ArrowForwardIcon />
      </div>
    </div>
  );
}
