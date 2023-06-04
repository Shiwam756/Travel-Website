import React from 'react'
import './Destinationstyles.css';
import taallake1 from '../Assets/taal-lake.webp'
import taallake2 from '../Assets/taal-lake-2.jpg'
import Sahara1 from '../Assets/sahara1.webp'
import Sahara2 from '../Assets/sahara2.jpg'
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Tours give you  the opportunity to see a lot, within a time frame</p>
      <DestinationData
      className="first-des"
      heading="Taal Volcano, Batangas"
      text="Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake. Its unexplained shape and location on an island within a lake within an island, makes it a unique geologic wonder, enthralling thousands of tourists and geologists yearly."
      img1={taallake1}
      img2={taallake2}
      />
      <DestinationData
      className="first-des-reverse"
      heading="Sahara Desert, Africa"
      text="The Sahara is a desert on the African continent. With an area of 9,200,000 square kilometres, it is the largest hot desert in the world and the third-largest desert overall, smaller only than the deserts of Antarctica and the northern Arctic.New research looking into what appears to be dust that the Sahara blew over to the Canary Islands is providing the first direct evidence from dry land that the age of the Sahara matches that found in deep-sea sediments: at least 4.6 million years old."
      img1={Sahara1}
      img2={Sahara2}
      />
    </div>
  )
}

export default Destination
