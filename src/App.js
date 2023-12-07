import './App.css';
import About from './components/mainPage/About/About';
import Blog from './components/mainPage/Blog/Blog';
import Contact from './components/mainPage/Contact/Contact';
import Navbar from './components/mainPage/Header/Navbar';
import Home from './components/mainPage/Home/Home';
import Portfolio from './components/mainPage/Portfolio/Portfolo';
import Resume from './components/mainPage/Resume/Resume';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
