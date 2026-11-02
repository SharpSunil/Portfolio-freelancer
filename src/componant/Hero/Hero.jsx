
import React from "react";
import {
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";
import "./Hero.scss";
import img1 from "../../assets/hero.png";

const Hero = () => {
  const technologies = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PHP",
  ];

  return (
    <div className="hero-parent parent" id="home">
      <div className="hero-cont container">
        <section className="hero-main">

          <div className="hero-content">
            <span className="hero-label">HELLO, I'M</span>

            <h1>Sunil Shelke</h1>

            <h2>React.js & Full-Stack Developer</h2>

            <p className="hero-description">
              I build modern, scalable and interactive web
              experiences that combine creative design,
              powerful functionality and performance.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="hero-primary-btn">
                View My Work
                <ArrowUpRight size={20} />
              </a>

              <a href="/resume.pdf" className="hero-secondary-btn" download>
                Download CV
                <Download size={19} />
              </a>
            </div>

            <div className="hero-technologies">
              <span className="trusted-label">
                Technologies I Work With
              </span>

              <div className="technology-list">
                {technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">

            <div className="hero-image-frame"></div>

            <div className="hero-frame-glow"></div>

            <div className="hero-profile">
              <img
                src={img1}
                alt="Sunil Shelke - Full Stack Developer"
              />
            </div>

            <div className="hero-experience glass-card">
              <h3>5+</h3>
              <span>Years of</span>
              <span>Experience</span>
            </div>

            <div className="hero-floating-icon">
              <Sparkles size={27} />
            </div>

            <div className="hero-growth glass-card">
              <span>My Expertise</span>
              <h3>Full-Stack</h3>

              <div className="growth-content">
                <Code2 size={21} />
                <span>Frontend + Backend</span>
              </div>
            </div>

          </div>

        </section>
      </div>
    </div>
  );
};

export default Hero;
