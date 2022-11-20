import Section from "../UI/Section";
import "./CurrentlyReading.css";
import bookSrc from "../../assets/books/four-hour-week.png";

const CurrentlyReading = () => {
  return (
    <Section className="currently-reading">
      <h2 className="cr-heading">Currently Reading</h2>
      <div className="cr-container">
        <div className="cr-book-cover">
          <img src={bookSrc} alt="The cover page of The Four Hour Work Week" />
        </div>
        <div className="cr-info">
          <h1 className="cr-book-name">The Four Hour Work Week</h1>
          <h3 className="cr-book-author">Timothy Ferris</h3>
          <p className="cr-desc">
            This book talks about the lifestyle design, on how to escape 9 to 5
            job.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CurrentlyReading;
