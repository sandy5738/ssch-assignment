import Section from "../UI/Section";
import "./Footer.css";

const Footer = () => {
  return (
    <Section className="footer">
      <h1 className="footer-heading">Adios! 👋</h1>
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/sandy5738" target="_blank">
            <i className="footer-social-icon fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-h-m-8817b157/"
            target="_blank"
          >
            <i className="footer-social-icon fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <h3 className="footer-subheading">
          Built with ❤️ using
          <span className="footer-subhead-icons">
            <i className="footer-sub-icon fa-brands fa-html5"></i>
            <i className="footer-sub-icon fa-brands fa-css3-alt"></i>
            <i className="footer-sub-icon fa-brands fa-js"></i>
            <i className="footer-sub-icon fa-brands fa-react"></i>
          </span>
        </h3>
      </div>
    </Section>
  );
};

export default Footer;
