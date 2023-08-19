import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Joel B Koshy </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> I am a final year student pursuing Master of Computer Applications
     at Christ University, Bangalore.
            <br />
            Additionally, I am currently employed as a software developer intern at
            Givfin.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be unsatisfied and always thrive to gain more!"{" "}
          </p>
          <footer className="blockquote-footer">Jk.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
