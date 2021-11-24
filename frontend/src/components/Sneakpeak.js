import sneak_1 from '../images/sneak_1.jpg'
import sneak_2 from '../images/sneak_2.jpg'
import sneak_3 from '../images/sneak_3.png'
import sneak_4 from '../images/sneak_4.png'

function Sneakpeak() {
    return (
<>
<section class="text-gray-600 body-font">
  <div class="container px-5 lg:px-12 lg:pt-24 pt-12 pb-12 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">The IMX Kaijuz are landing on ImmutableX.</h1>
        <div class="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">After taking over the Land of the Kaijuz, the IMX Kaijuz have found themselves near ImmutableX HQ. The IMX Kaijuz will be launching on ImmutableX on the 19th November 2021! 🚀</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 px-6 py-12 rounded-lg">
          <img class="h-100 rounded w-full object-cover object-center mb-6" src={sneak_1} alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Original Artwork 🎨</h2>
          <p class="leading-relaxed text-base">All our stunning Kaijuz and accessories are designed from the ground up by our wonderful artist Anthony!</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 px-6 py-12 rounded-lg">
          <img class="h-100 rounded w-full object-cover object-center mb-6" src={sneak_2} alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">100+ Traits 👓</h2>
          <p class="leading-relaxed text-base">From our rarest Lava Kaiju, to our moustache accessory, the IMX Kaijuz collection is loaded with over 100 traits to mint!</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2  p-4">
        <div class="bg-gray-100 px-6 py-12 rounded-lg">
          <img class="h-100 rounded w-full object-cover object-center mb-6" src={sneak_3} alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Secured Access to LOTK 👾</h2>
          <p class="leading-relaxed text-base">Minting a V1 IMX Kaiju in our upcoming mint will secure your place in LOTK!</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 px-6 py-12 rounded-lg">
          <img class="h-100 rounded w-full object-cover object-center mb-6" src={sneak_4} alt="content" />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Breeding Incoming 🐣</h2>
          <p class="leading-relaxed text-base">Breed 2 V1 IMX Kaijuz together to spawn a Zilla Kaiju! There will be only 1,111 Zillas available.</p>
        </div>
      </div>
      <div id="IMX" />
    </div>
  </div>
</section>
</>
);
}

export default Sneakpeak;