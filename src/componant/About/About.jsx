
import React from "react";
import { ArrowUpRight, Code2, Layers3, BriefcaseBusiness } from "lucide-react";
import "./About.scss";

const About = () => {
  const stats = [
    {
      icon: <BriefcaseBusiness />,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: <Code2 />,
      number: "React",
      label: "Frontend Development",
    },
    {
      icon: <Layers3 />,
      number: "Full-Stack",
      label: "Development Expertise",
    },
  ];

  return (
    <div className="about-parent parent" id="about">
      <div className="about-cont container">
        <section className="about-main glass-card">

          <div className="about-left">
            <span className="about-label">ABOUT ME</span>

            <h2>
              Building Digital Experiences
              <br />
              With Purpose
            </h2>

            <div className="about-stats">
              {stats.map((item, index) => (
                <div className="about-stat-item" key={index}>
                  <div className="stat-icon">
                    {item.icon}
                  </div>

                  <h3>{item.number}</h3>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <p>
              I'm a web developer with 5+ years of experience
              creating modern, responsive and high-performing
              websites. I specialise in React.js, Next.js and
              full-stack development, turning complex ideas
              into seamless digital experiences.
            </p>

            <p>
              I focus on clean code, intuitive user interfaces,
              performance optimisation and building solutions
              that deliver real value.
            </p>

            <a href="#work" className="about-button">
              More About Me
              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>

        </section>
      </div>
    </div>
  );
};

export default About;
