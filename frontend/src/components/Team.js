import team_1 from '../images/team_1.png'
import team_2 from '../images/team_2.png'
import team_3 from '../images/team_3.jpg'
import team_4 from '../images/team_4.png'
import team_5 from '../images/team_5.png'
import team_6 from '../images/team_6.jpg'
import team_7 from '../images/team_7.png'
import team_jack from '../images/team_jack.jpg'
function Team() {
    return (
      <>
<section class="text-gray-600 body-font">
  <div class="container px-5 lg:px-12 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Our Awesome Team ✨</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Below is a short breakdown of our team here at IMX Kaijuz! We are 8 people strong currently. More information like Twitter and Linkedin profiles will be released about the team at a later date!</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_1} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Ben</h2>
            <h3 class="text-gray-500 mb-3">Creator and CMO</h3>
            <p class="mb-4">Ben is the Owner and marketing specialist behind IMX Kaijuz, with 5+ years of experience in eCommerce and digital marketing. </p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_2} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Nayan</h2>
            <h3 class="text-gray-500 mb-3">Deployment Specialist</h3>
            <p class="mb-4">Responsible for ensuring our server and minting functionality is running as smooth as 🧈. AWS + backend deployment specialist.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_7} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Sam</h2>
            <h3 class="text-gray-500 mb-3">Community Manager</h3>
            <p class="mb-4">Sam is our community manager, responsible for maintaining the admin behind our marketing plan, brand outreach and more.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_3} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Shrishti</h2>
            <h3 class="text-gray-500 mb-3">Blockchain Developer</h3>
            <p class="mb-4">Shrishti assisted and worked closely with Nayan and Shruti in the development of the IMX Smart Contract.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container px-5 lg:px-12 pb-24 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_4} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Fearn</h2>
            <h3 class="text-gray-500 mb-3">Moderator Manager</h3>
            <p class="mb-4">Kicking, banning and reporting DM phishing, Fearn is our Moderator Manager in our Discord server.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_5} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Anthony</h2>
            <h3 class="text-gray-500 mb-3">NFT Artist</h3>
            <p class="mb-4">Anthony has designed all the layers for the IMX Kaijuz collection, from hand. Responsible for the life and soul of the project, we wouldn't be here today without Anthony!</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_6} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Shruti</h2>
            <h3 class="text-gray-500 mb-3">Backend Development</h3>
            <p class="mb-4">Responsible for the stability and secure environment this website is hosted on. Shruti is a wizz when it comes to React, NGINX and AWS.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={team_jack} />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Jack</h2>
            <h3 class="text-gray-500 mb-3">Community Relations Manager</h3>
            <p class="mb-4">A true Hodler at heart, responsible for handling the discord server, assisting in twitter and reddit CMS marketing and brand outreach.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

  

</>
  );
}

export default Team;