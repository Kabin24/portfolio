
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Portfolia from "./components/Portfolia";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolia />
      <Skill />
      <Contact />

      <SocialLinks />
      <Footer />
      
    </div>
  )
}


export default App;