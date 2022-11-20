import "./App.css";
import CurrentlyReading from "./Components/CurrentlyReading/CurrentlyReading";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Leisure from "./Components/Leisure/Leisure";
import Projects from "./Components/Projects/Projects";
import TechStack from "./Components/TechStack/TechStack";
import TopNav from "./Components/TopNav/TopNav";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Hero />
      <TechStack />
      <Leisure />
      <Projects />
      <CurrentlyReading />
      <Footer />
    </div>
  );
};

export default App;
