
import "./SingleProject.css";
import img1 from "../../assets/sp.png";
import img2 from "../../assets/10.jpg";
import img3 from "../../assets/11.jpg";
import img4 from "../../assets/12.jpg";
import img5 from "../../assets/13.jpg";
import img6 from "../../assets/p1.png";
import img7 from "../../assets/p2.png";
import img8 from "../../assets/18.png";
import img9 from "../../assets/19.png";
import img10 from "../../assets/20.png";
import img11 from "../../assets/F.png";
import img12 from "../../assets/I.png";
import img13 from "../../assets/L.png";
import React from 'react'
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import heroImage from "../../assets/SingleP.png"

export default function SingleProject() {
  return (
    <>
    <Navigation/>
    <Topimage text1="Single project" text2 ="Home /Single project" image={heroImage}/>
    <div className="Div1">
      <div>
        <img src={img1} className="Image"></img>
      </div>
      <div className="Div2">
        <h2>London Palace</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        <h3>Project Info</h3>
        <div className="Div3">
          <h3 className="h3">Client :</h3>
          John Do
        </div>
        <div className="Div3">
          <h3 className="h3">Category :</h3>
          Construction Business
        </div>
        <div className="Div3">
          <h3 className="h3">Completed on :</h3>
          20 January 2022
        </div>
        <div className="logos">
          <img src={img11} className=""></img>
          <img src={img12}></img>
          <img src={img13}></img>
        </div>
      </div>
    </div>

    <div className="Text">
      {" "}
      Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it
      over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going through
      the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
      of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
      Cicero, written in 45 BC. This book is a treatise on the theory of
      ethics, very popular during the Renaissance. The first line of Lorem
      Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
      1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
      reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
      "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
      exact original form, accompanied by English versions from the 1914
      translation by H. Rackham.{" "}
    </div>
    <div className="ABC2">
      <img src={img2} className="Image5"></img>
      <img src={img3} className="Image5"></img>
      <img src={img4} className="Image5"></img>
      <img src={img5} className="Image5"></img>
    </div>

    <div className="Div7">
      <div className="Div5">
        <img src={img6} className="image7"></img>
        <h4>Previous Project</h4>
      </div>

      <div className="Div6">
        <h4> Next Project</h4>
        <img src={img7} className="image6"></img>
      </div>
    </div>

    <div className="Div8">
      <img src={img8} className="Image8"></img>
      <div className="contaner">
        <img src={img9} id="overlay" className="Image8"></img>
      </div>

      <img src={img10} className="Image8"></img>
    </div>
  </>
  )
}



