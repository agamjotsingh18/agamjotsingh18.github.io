import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Agamjot Singh </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am a Computer Science Engineering graduate from <span className="purple">JIMS Greater Noida</span> (CGPA: 9.05) and a passionate <span className="purple">Full-Stack Developer</span>.
            <br />
           Currently, I am architecting financial infrastructure and advanced charting solutions at <span className="purple">Wealthcraft Innovation</span>. My journey has taken me through diverse roles—from securing systems as a Intern with the <span className="purple">Gurugram Police</span> to mentoring the next generation of devs at the <span className="purple">Techrity Foundation</span>.
            <br />
            Beyond the code, I am the founder of <a href="https://codesetgo.github.io/" rel="noopener noreferrer" className="purple" target="_blank" >CodeSetGo</a>, where I focus on bridging the gap between learning and industry through mentorship and open-source contribution.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Football:</span> Competitive player (Proud Bronze medalist at IIIT Delhi Sports Fest).
            </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Community Building:</span> Judging and mentoring at global hackathons like Unihack and Hack A Miner.
</li>
<li className="about-activity">
              <ImPointRight /> <span className="purple">Open Source:</span> Actively contributing to and leading initiatives in the web ecosystem.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Adventure:</span> Exploring new places and traveling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Agamjot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
