import sneak_5 from '../images/sneak_5.png'
import discord from '../images/discord.png'
import { Link } from "react-scroll";
function Hero() {
    return (
      <>
<section class="text-gray-600 body-font px-5 lg:px-12 py-6 lg:py-20">
  <div class="container mx-auto flex   dark:bg-black bg-blackpy-30 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img src={sneak_5} class="shadow-2xl" alt="Kaiju green body blue background" />
      </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-8 font-medium text-black">Welcome to IMX Kaijuz,
        <br class="hidden lg:inline-block" /> here to take over ImmutableX.
      </h1>
      <p class="mb-8 leading-relaxed text-lg text-black">The IMX Kaijuz are an 8,888 randomly generated NFT collection launching on ImmutableX with a 0.07ETH price and no gas fees. Land of the Kaijuz PvE blockchain game coming soon to IMX Kaijuz! 👾</p>
      <div class="flex justify-center">
         <button class="inline-flex shadow-md items-center content-center space-x-3 font-bold bg-green-500 border-0 py-2 px-8 focus:outline-none text-white rounded text-base mt-4 md:mt-0"><a href="https://discord.gg/xm3ZHcErqh">Join Our Discord</a>
    <img src={discord} class="w-6" alt="Kaiju green body blue background" />
    
    </button> 
    
 </div>
      <div id="sneakpeak" />
    </div>
  </div>
</section>

</>
  );
}

export default Hero;