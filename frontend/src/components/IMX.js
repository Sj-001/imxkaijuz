import { Link } from "react-scroll";
function IMX() {
  return (
    <>
    <section class="text-black body-font">
  <div class="container px-5 lg:px-12 lg:pt-12 pt-12 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center  mb-20">Why are we using IMX (ImmutableX)?
      <br class="hidden sm:block" />
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="= text-lg title-font font-medium mb-2">No gas fees.</h2>
          <p class="leading-relaxed text-base">We are launching on ImmutableX. IMX utilise Layer 2 Ethereum technology to absorb the cost of gas fees, so when you are minting your Kaiju there will be no gas fees! This also means there are no gas wars when minting ⛽</p>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="= text-lg title-font font-medium mb-2">Fast, scalable platform.</h2>
          <p class="leading-relaxed text-base">Utilising IMX's Layer 2 technology alongside a strong team of developers has proven to be a very pleasant developing experience. Even with IMX being in it's infancy, their platform is well documented and customer support has been a dream to deal with.</p>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3 pb-12 lg:pb-0 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-lg title-font font-medium mb-2">Carbon neutral minting.</h2>
          <p class="leading-relaxed text-base">We are fully supportive of Layer 2 technology and IMX's approach to carbon neutral minting. With minting being a high emmision activity we believe Layer 2 is the future, we all need to do our bit for the future of this planet 🌎</p>
         
        </div>
      </div>
    </div>
    <div id="roadmap" />
    <button class="font-bold shadow-md flex mx-auto lg:mt-20 mt-10 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"><Link  spy={true} smooth={true} offset={50} duration={500}>Mint a Kaiju: Coming Soon 🐉</Link></button>
  </div>
</section>

    </>
  );
}

export default IMX;