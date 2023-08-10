import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple"> Preeti Poddar </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
           Hi Everyone, I am <span className="purple"> Preeti Poddar </span> a Computer Science student currently enrolled at <span className="purple"> Vellore Institute of Technology (VIT-Vellore) </span>. I have successfully completed six semesters of my degree program. I would describe myself as an enthusiast who loves to explore new, ever-evolving technologies and learn from them as I advance in my career.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace challenges as opportunities to engineer a brighter future."{" "}
          </p>
          <footer className="blockquote-footer">Preeti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
