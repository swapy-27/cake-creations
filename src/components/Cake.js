import React from "react";

export default function Cake(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid black",
        padding: "5px",
        borderRadius: "20px",
        marginRight: "20px",
        background: "white",
      }}
    >
      <div className="cake_image_container">
        <img className="cake_image" src={props.image} alt="cake" />
      </div>
      <p
        style={{
          fontFamily: "sans-serif",
          marginTop: "20px",
          fontWeight: 300,
          fontSize:"20px"
        }}
      >
        {props.name}
      </p>
    </div>
  );
}
