import React from "react";
import "../css/home.css";
import NavBar from "../components/NavBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cake from "../components/Cake";
import cakeImage from "../assets/best-moist-chocolate-cake-1.jpg";
import BestSeller from "../components/BestSeller";
import Logo from "../assets/logo192.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

import menu_1 from "../assets/menu/WhatsApp Image 2023-02-18 at 10.35.26 PM (1).jpeg";
import menu_2 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.50.54 AM (1).jpeg";
import menu_3 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.50.54 AM.jpeg";
import menu_4 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.51.09 AM (1).jpeg";
import menu_5 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.51.09 AM (2).jpeg";
import menu_6 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.51.09 AM.jpeg";
import menu_7 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.53.15 AM.jpeg";

import bestseller1 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.53.16 AM.jpeg";
import bestseller2 from "../assets/menu/WhatsApp Image 2023-02-25 at 10.53.52 AM.jpeg";

import cake1 from "../assets/collage/WhatsApp Image 2023-02-18 at 10.35.28 PM (1).jpeg";

import cake3 from "../assets/collage/WhatsApp Image 2023-02-18 at 10.35.35 PM (2).jpeg";
import cake4 from "../assets/collage/WhatsApp Image 2023-02-18 at 10.35.36 PM.jpeg";

export default function Home() {
  const menu_carousel = [
    {
      image: menu_1,
      name: "Vanilla-Cake",
    },
    {
      image: menu_2,
      name: "Strawberry-Cake",
    },
    {
      image: menu_3,
      name: "DarkChocolate-Cake",
    },
    {
      image: menu_4,
      name: "Pineapple-Cake",
    },

    {
      image: menu_6,
      name: "TutyFruity-Cake",
    },
    {
      image: menu_5,
      name: "Customized-Cake",
    },
    {
      image: menu_7,
      name: "Customized-Cake",
    },
  ];
  const bestsellers_carousel = [
    {
      image: menu_3,
      name: "Chocolate-Cake",
      price: "500/-",
    },
    {
      image: bestseller2,
      name: "Pineapple-Cake",
      price: "400/-",
    },
    {
      image: bestseller1,
      name: "Vanilla-Cake",
      price: "400/-",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="home_container">
        <div className="baner_container">
          <div></div>
          <div className="baner_text">
            <p
              style={{
                fontSize: "60px",
              }}
            >
              The perfect Cake every time!
            </p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              we are a company dedicated to the prepapration of cake, providing
              our customers with a homemade product always fresh from the oven.
            </p>
            <div className="discover_button">
              <a href="#menu">
                <span>Discover Menu</span>
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="menu_container" id="menu">
          <p className="section_header">What We Make</p>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              width: "100vw",
              alignItems: "center",
            }}
          >
            {menu_carousel.map((val) => {
              return <Cake image={val.image} name={val.name} />;
            })}
          </div>
        </div>
        <div className="bestseller_container ">
          <div>
            <p className="section_header">Our Bestsellers</p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              These items are our topselling items customer demand for these
              items are increasing day by day.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflowX: "scroll",
              width: "100vw",
            }}
          >
            {bestsellers_carousel.map((val) => {
              return (
                <BestSeller
                  image={val.image}
                  name={val.name}
                  price={val.price}
                />
              );
            })}
          </div>
        </div>

        <div className="about_container" id="about">
          <div className="flex_coloumn" style={{ justifyContent: "center" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "30px",
                fontWeight: 700,
              }}
            >
              Our Story
            </p>
            <p className="story_text_paragraph">
              We started our journey in 2022. We are manufacturing & serving
              Homemade Fresh cakes with brand name of Cake Creations. We also
              produce Customized Cakes, Ice cakes that will be suitable
              according to customers requirement. We are having wide range of
              variety of cakes that are designed by us. You can order and enjoy
              Fresh cakes.
            </p>
          </div>
          <div className="flex_coloumn collage_image_container">
            <div className="image_container">
              <div style={{ height: "200px", width: "33.33%" }}>
                <img className="image" src={cake3} alt="img" />
              </div>
              <div style={{ height: "200px", width: "66.66%" }}>
                <img className="image" src={cakeImage} alt="img" />
              </div>
            </div>
            <div className="image_container">
              <div style={{ height: "200px", width: "66.66%" }}>
                <img className="image" src={cake1} alt="img" />
              </div>
              <div style={{ height: "200px", width: "33.33%" }}>
                <img className="image" src={cake4} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="contact_container" id="contact">
        <div className="flex_coloumn contact_left_col">
            <p style={{fontWeight:"bolder"}}>Get In Touch</p>
            <div>
              <p>
                <LocationOnIcon />
                <span style={{marginLeft:"5px"}}>Dhanwantri Nagar, Jabalpur-482003</span>{" "}
              </p>
              <p >
                <EmailIcon />
                <span style={{marginLeft:"5px"}}>email</span>
              </p>
              <p>
                <CallIcon />
                <span style={{marginLeft:"5px"}}>7974231618</span>
              </p>
            </div>
          </div>
          <div className="flex_coloumn contact_middle_col ">
            <div style={{ height: "100px", width: "200px" }}>
              <img className="logo_image" src={Logo} alt="logo"></img>
            </div>
            <div>
              <a href="https://www.instagram.com/cake_creation_jbp/?igshid=ZDdkNTZiNTM%3D" target="blank">
                <InstagramIcon />
              </a>
              <a href="https://www.instagram.com/cake_creation_jbp/?igshid=ZDdkNTZiNTM%3D" target="blank">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/cake_creation_jbp/?igshid=ZDdkNTZiNTM%3D" target="blank">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
       
          <div className="flex_coloumn contact_right_col">
            <p style={{fontWeight:"bolder"}}>Quick Links</p>
            <a href="#">Home</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
