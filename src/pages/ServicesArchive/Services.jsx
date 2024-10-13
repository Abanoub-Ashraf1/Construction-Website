import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/services.jpg";
import { Container , Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./ServiceArchive.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import Footer from "../../components/Footer";


const services = [
  {
    id: 1,
    title: "Service One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img1,
  },
  {
    id: 2,
    title: "Service Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img2,
  },
  {
    id: 3,
    title: "Service Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img3,
  },
  {
    id: 4,
    title: "Service Four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img4,
  },
];


export default function Services() {
  return (
    <>
      <Navigation />
      <Topimage
        text1="Services Archive"
        image={heroImage}
        text2="Home / Services Archive"/>

       < Container  className="service-container ">
      {services.map((service, index) => (
        <Row
          className={`service-card mb-0 ${index % 2 === 0 ? "" : "reverse"}`}
          key={service.id}
        >
          <div className="square image-square">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="service-image"
            />
          </div>
          <div className="square text-square">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="text-b btn btn-danger my-3 p-3 px-5 ">
                  Learn more <FontAwesomeIcon icon={faArrowRight} />
                </button>
          </div>
        </Row>
      ))}
    </Container>

    <Footer/>
    </>
  );
}
