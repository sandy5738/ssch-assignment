import "./Section.css";

const Section = ({ children, className }) => {
  const classes = "section " + className;
  return <div className={classes}>{children}</div>;
};

export default Section;
