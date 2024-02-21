// import './App.css'
import { Typography, Container } from "@mui/material";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Work } from "./components/work";
import { Skills } from "./components/skills";
import { Qualifications } from "./components/qualifications";
function App() {
  return (
    <>
      <Container >
        {/* content wrapper */}
        {/* navbar */}
        <Navbar />
        <Hero/>
        <About />
        <Skills/>
        <Qualifications/>
        <Work />        
        <Contact/>
      </Container>
    </>
  );
}

export default App;
