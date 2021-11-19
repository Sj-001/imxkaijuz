import { Link } from "react-scroll";
function Roadmap() {
  return (
    <>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 lg:px-12 pt-32 pb-8 mx-auto">
  <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Roadmap 2.0 🗺️</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Below is our Roadmap. This roadmap is not final and will develop and grow as the project progresses. When any updates are made here the community will be notified.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
      </div>
    </div>  
           
   
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-900">ROADMAP: PHASE 1</span>
          <span class="mt-1 text-green-500 text-sm">PRE-MINT</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">The first steps of the IMX Kaijuz... 🦖</h2>
          <p class="leading-relaxed">- Community AMA + Website Backend + Front End Deployment</p>
          <p class="leading-relaxed">- Launch on IMXRarity so that anyone can check their individual NFT's rarity ranking.</p>
          <p class="leading-relaxed">- V1 IMX Kaijuz launching on ImmutableX at a mint price of 0.07ETH + no gas fees.</p>
         
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-900">ROADMAP: PHASE 2</span>
          <span class="mt-1 text-green-500 text-sm">POST-MINT UNTIL 2022</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Breeding, 1/1 Drops, Giveaways 🤝</h2>
          <p class="leading-relaxed">- 2ETH + 1 Free IMX Kaiju Giveaway 🎁</p>
          <p class="leading-relaxed">- Breed two V1 IMX Kaijuz together and spawn a ZILLA Kaiju! IMX Zillaz will only be limited to 1,111 supply, the first Kaijuz to breed will claim them!</p>
          <p class="leading-relaxed">- Limited edition christmas seasonal Kaijuz release, whitelist spots and exclusive NFT giveaways available for current V1 IMX Kaijuz holders!</p>
          
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-900">ROADMAP: PHASE 3</span>
          <span class="text-sm text-green-500">2022</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">What about LOTK? 🎮</h2>
          <p class="leading-relaxed">- LOTK game art development is currently under way (As of right now)</p>
          <p class="leading-relaxed">- Land of the Kaijuz website release</p>
          <p class="leading-relaxed">- LOTK game coding development and UI drafting will begin as of the beginning of Phase 3</p>
          <p class="leading-relaxed">- V2 IMX Kaijuz release date, upon release this will expand the LOTK map and unlock hidden quests and easter eggs to further access to limited edition NFT's.</p>      
        </div>
      </div>
      <div id="lotk" />
    </div>
  </div>
</section>
    </>
  );
}

export default Roadmap;