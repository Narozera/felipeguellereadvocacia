import Header from "./Components/Header";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Jobs from "./Sections/Jobs";
import Career from "./Sections/Career";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Hero />
      <Jobs />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
