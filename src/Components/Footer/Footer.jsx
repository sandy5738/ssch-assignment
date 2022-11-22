import { useState, useEffect } from "react";
import Section from "../UI/Section";
import "./Footer.css";

const Footer = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://good-place-quotes.herokuapp.com/api/random"
      );

      const data = await response.json();
      setQuote(data);
      console.log(quote);
    }

    const genQuote = setInterval(getData, quote ? 60000 : 1000);

    return () => {
      clearInterval(genQuote);
    };
  }, [quote, setQuote]);
  return (
    <Section className="footer">
      <div className="footer-one">
        <h1 className="footer-heading">Adios! 👋</h1>
        <p className="quote-head">
          Enjoy a random quote from <em>The Good Place</em>
        </p>
        <h4 className="quote">{quote ? quote.quote : "Working on it!"}</h4>
        <p className="quote-by">
          <em>{quote ? quote.character : "My best man is on it!"}</em>
        </p>
      </div>
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
