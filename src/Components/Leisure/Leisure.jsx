import { useState, useEffect } from "react";

import Section from "../UI/Section";
import "./Leisure.css";

const Leisure = () => {
  const leisure = [
    "Read 📖",
    "Watch TV Series 📺",
    "Design ✒️",
    "Listen to Music 🎶",
    "Watch Anime 🎏",
  ];
  const [leisureWork, setLeisureWork] = useState(leisure[0]);

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  useEffect(() => {
    const leisureGen = setInterval(() => {
      const randomValue = random(0, leisure.length);
      setLeisureWork(leisure[randomValue]);
    }, 2000);
    return () => {
      clearInterval(leisureGen);
    };
  }, [leisureWork]);

  return (
    <Section className="leisure">
      <h2 className="leisure-sub-heading">In my leisure time, I</h2>
      <div className="leisure-container">
        <h1 className="leisure-lead-heading">{leisureWork}</h1>
      </div>
    </Section>
  );
};

export default Leisure;
