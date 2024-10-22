import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Juan Garcia</span>, 
            originally from <span className="purple">Cádiz, Spain.</span>
            <br />
            I’m currently a student of <span className="purple">Computer Science</span> at UCA.
            <br />
            <br />
            When I'm not coding, I enjoy a variety of activities that I’m passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology alone is not enough. We also need to put our heart into it."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
