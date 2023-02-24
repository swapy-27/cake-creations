import React from "react";
import "../css/home.css";
import NavBar from "../components/NavBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cake from "../components/Cake";
import cakeImage from "../assets/best-moist-chocolate-cake-1.jpg";
import BestSeller from "../components/BestSeller";
import Logo from "../assets/logo192.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
export default function Home() {
  const menu_carousel = [
    {
      image: cakeImage,
      name: "Choclate-Cake",
    },
    {
      image: cakeImage,
      name: "Choclate-Cake",
    },
    {
      image: cakeImage,
      name: "Choclate-Cake",
    },
    {
      image: cakeImage,
      name: "Choclate-Cake",
    },
  ];
  const bestsellers_carousel = [
    {
      image: cakeImage,
      name: "Choclate-Cake",
    },
    {
      image: cakeImage,
      name: "Choclate-Cake",
    },
    {
      image: cakeImage,
      name: "Choclate-Cake",
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
                fontFamily: "sans-serif",
                fontSize: "60px",
                fontWeight: 500,
              }}
            >
              The perfect Cake every time!
            </p>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              we are a company dedicated to the prepapration of cake, providing
              our customers with a homemade product always fresh from the oven.
            </p>
            <div className="discover_button">
              <span>Discover Menu</span>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>

        <div className="menu_container">
          <p className="section_header">What We Make</p>
          <div
            style={{
              display: "flex",
            }}
          >
            {menu_carousel.map((val) => {
              return <Cake image={val.image} name={val.name} />;
            })}
          </div>
        </div>
        <div className="menu_container ">
          <div>
            <p className="section_header">Our Bestsellers</p>
          </div>
          <div>
            <p>
              These items are our topselling items customer demand for these
              items are increasing day by day.
            </p>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {bestsellers_carousel.map((val) => {
              return <BestSeller image={val.image} name={val.name} />;
            })}
          </div>
        </div>

        <div className="about_container">
          <div className="flex_coloumn" style={{ justifyContent: "center" }}>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              Our Story
            </p>
            <p>
              We started our journey in 2022. We are manufacturing & serving
              Homemade Fresh cakes with brand name of Cake Creations. We also
              produced Customized Cakes ,Ice cakes that will be suitable
              according to customers requirement. We are having wide range of
              variety of cakes that are designed by us. You can order and enjoy
              Fresh cakes.
            </p>
          </div>
          <div className="flex_coloumn">
            <div className="image_container">
              <div style={{ height: "200px", width: "200px" }}>
                <img className="image" src={cakeImage} alt="img" />
              </div>
              <div style={{ height: "200px", width: "400px" }}>
                <img className="image" src={cakeImage} alt="img" />
              </div>
            </div>
            <div className="image_container">
              <div style={{ height: "200px", width: "400px" }}>
                <img className="image" src={cakeImage} alt="img" />
              </div>
              <div style={{ height: "200px", width: "200px" }}>
                <img className="image" src={cakeImage} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="contact_container">
          <div className="flex_coloumn contact_left_col">
            <div style={{ height:"100px",width:"200px"}}>
              <img className="logo_image" src={Logo} alt="logo"></img>
            </div>
            <div>
              <a href="#"><InstagramIcon/></a>
              <a href="#"><FacebookIcon/></a>
              <a href="#"><WhatsAppIcon/></a>
          
            </div>
          </div>
          <div className="flex_coloumn contact_middle_col">
            <p >Get In Touch</p>
            <div>
            <p><LocationOnIcon/><span>
              Dhanwantri Nagar, Jabalpur-482003</span> </p>
            <p><EmailIcon/><span>email.gmail.com</span></p>
            <p><CallIcon/><span>9999999999</span></p>
            </div>
          </div>
          <div className="flex_coloumn contact_right_col">
            <p>Quick Links</p>
           
            <p>Home</p>
            <p>Menu</p>
            <p>AboutUs</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
