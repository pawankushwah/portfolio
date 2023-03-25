import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";
import SayHi from "./components/SayHi";

import AnimatedCursor from "react-animated-cursor";

function App() {
  let linkData = {
    Home: "#Home",
    Projects: "#projects",
    Profiles: "#profiles",
    "Say Hi!": "#sayhi",
  };
  return (
    <>
      <AnimatedCursor
        innerSize={30}
        outerSize={80}
        color="255, 0, 0"
        outerAlpha={0.3}
        innerScale={0}
        outerScale={1.5}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "mixed",
        }}
        innerStyle={{
          backgroundImage: "url('images/bg1.jpeg')",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar title={"Pawan Kushwah"} links={linkData} />
      <Home />
      <Projects />
      <Profiles />
      <SayHi />
      <Footer />
    </>
  );
}

export default App;
