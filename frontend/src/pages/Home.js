import Header from '../components/Header'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import IMX from '../components/IMX';
import Sneakpeak from '../components/Sneakpeak';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import Lotk from '../components/Lotk';

function Home() {
  return (
    <>
    <Header /> 
    <Hero />
    <Sneakpeak />
    <IMX />
    
    <Roadmap />

    <Lotk />
    <Team />
    
    <Footer />
    </>
  );
}

export default Home;