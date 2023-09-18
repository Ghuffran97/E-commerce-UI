import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <div >

      <Topbar />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
