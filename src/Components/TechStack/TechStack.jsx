import Section from "../UI/Section";
import "./TechStack.css";
import expressLogo from "../../assets/logos/expressjs.svg";
import mongoLogo from "../../assets/logos/mongo_logo.svg";

const TechStack = () => {
  return (
    <Section className="tech-stack">
      <h2 className="ts-heading">My Tech Stack includes</h2>
      <div className="ts-one">
        <i className="ts-icon fa-brands fa-html5"></i>
        <i className="ts-icon fa-brands fa-css3-alt"></i>
        <i className="ts-icon fa-brands fa-js"></i>
        <i className="ts-icon fa-brands fa-node-js"></i>
        <i className="ts-icon fa-brands fa-react"></i>
      </div>
    </Section>
  );
};

export default TechStack;
