import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';


const App = () => {
  return (
    <div

      className="
    bg-gradient-to-r from-darkcolor via-maincolor to-maincolor
    p-5 md:p-6 lg:p-12 xl:pl-24 ">

      <Header />
      <Banner />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
