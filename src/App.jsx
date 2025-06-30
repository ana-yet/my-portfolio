import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import ContactMe from "./components/Contact/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SkillsSection from "./components/Skills/SkillsSection";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
