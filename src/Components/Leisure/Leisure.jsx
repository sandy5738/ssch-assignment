import { useState, useEffect } from "react";

import Section from "../UI/Section";
import "./Leisure.css";

const Leisure = () => {
  const leisure = [
    "Read 📖",
    "Watch TV Series 📺",
    "Design ✒️",
    "Listen to Music 🎶",
  ];
  const [leisureWork, setLeisureWork] = useState(leisure[0]);
  // let leisureWork = leisure[0];
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  useEffect(() => {
    const leisureGen = setInterval(() => {
      const randomValue = random(0, leisure.length);
      setLeisureWork(leisure[randomValue]);
    }, 1000);
    return () => {
      clearInterval(leisureGen);
    };
  }, [leisureWork]);

  return (
    <Section className="leisure">
      <h3 className="leisure-sub-heading">In my leisure time, I</h3>
      <h1 className="leisure-lead-heading">{leisureWork}</h1>
    </Section>
  );
};

export default Leisure;
