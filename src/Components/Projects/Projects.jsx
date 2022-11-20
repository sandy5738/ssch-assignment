import Section from "../UI/Section";
import "./Projects.css";

import broImg from "../../assets/projects/bro_ss.png";
import productImg from "../../assets/projects/product-preview.png";

const Projects = () => {
  return (
    <Section className="projects">
      <h2 className="project-heading">Projects</h2>
      <div className="p-container">
        <div className="p-item">
          <div className="p-img">
            <img src={broImg} alt="Screenshot of Bridge to Reach Website" />
          </div>
          <div className="p-item-info">
            <h3 className="p-name">Bridge to Reach</h3>
            <a href="https://bridgetoreach.herokuapp.com/" target="_blank">
              https://bridgetoreach.herokuapp.com/
            </a>
            <p className="p-desc">
              Designed and Built a Webpage for Bridge to Reach Organization(NGO)
            </p>
          </div>
        </div>
        <div className="p-item">
          <div className="p-img">
            <img src={productImg} alt="Screenshot of Product Preview Project" />
          </div>
          <div className="p-item-info">
            <h3 className="p-name">Product Preview</h3>
            <a
              href="https://sandy5738.github.io/product-preview-card/"
              target="_blank"
            >
              https://sandy5738.github.io/product-preview-card/
            </a>
            <p className="p-desc">A challenge from frontendmentor.io</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
