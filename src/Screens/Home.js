import React from "react";
import "../css/home.css";
import NavBar from "../components/NavBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cake from "../components/Cake";
import cakeImage from "../assets/best-moist-chocolate-cake-1.jpg";
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
  return (
    <div>
      <NavBar />
      <div className="home_container">
        <div className="baner_container">
          <div></div>
          <div style={{ paddingRight: 20, color: "whitesmoke" }}>
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
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "30px",
              fontWeight: 500,
            }}
          >
            What We Make
          </p>
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
        <div>
          <div>
            <p>Our Bestsellers</p>
          </div>
          <div>
            <p>
              These items are out topselling items customer demand for these
              items are increasing day by day.
            </p>
          </div>
          <div></div>
        </div>

        <div className="about_container">
          <div className="flex_coloumn">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Our Story
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div></div>
        </div>

        <div className="contact_container">
        <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "30px",
              fontWeight: 500,
            }}
          >
            Get In Touch
          </p>
        </div>
      </div>
    </div>
  );
}
