import React from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/tocover.jpg";
import { Container , Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./ToolsRent.css";
import img1 from "../../assets/tools4.jpeg";
import img2 from "../../assets/tool2.jpg";
import img3 from "../../assets/tool3.jpg";
import img4 from "../../assets/tool-cover.jpeg";
import Footer from "../../components/Footer";


const Tools = [
  {
    id: 1,
    title: "bulldozer",
    description: "45 $ per day .",
    imgSrc: img1,
  },
  {
    id: 2,
    title: "tool 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img2,
  },
  {
    id: 3,
    title: "tool Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img3,
  },
  {
    id: 4,
    title: "tool Four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: img4,
  },
];


export default function ToolsRent() {
  return (
    <>
      <Navigation />
      <Topimage
        text1="Tools Archive"
        image={heroImage}
        text2="Home / Tools Archive"/>

       < Container  className="service-container ">
      {Tools.map((service, index) => (
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
