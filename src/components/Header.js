import { Link } from "react-scroll";
import logo_imx_kaijuz from '../images/logo_imx_kaijuz.png'
import metamask from '../images/metamask.png'
function Header() {
    return (
      <>
<div id="hero" />
<header class="text-black body-font opacity-100 bg-white mt-0 pt-0">
  <div class="container mx-auto flex flex-wrap p-5 opacity-100 flex-col md:flex-row items-center">
    <a class="flex opacity-100 title-font w-20 font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo_imx_kaijuz} alt="IMXKaijuz Logo" />
    </a>
    <nav class="md:ml-auto md:mr-auto flex  flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900"><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link  to="sneakpeak" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link  to="roadmap" spy={true} smooth={true} offset={50} duration={500}>Roadmap</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link  to="lotk" spy={true} smooth={true} offset={50} duration={500}>LOTK</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link  to="team" spy={true} smooth={true} offset={50} duration={500}>Our Team</Link></a>
    </nav>
    <button class="font-bold shadow-md flex lg:mt-0 mt-5  text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded "><Link  spy={true} smooth={true} offset={50} duration={500}>Mint a Kaiju: Coming Soon 🐉</Link></button>
    
  </div>
</header>
</>
  );
}

export default Header;