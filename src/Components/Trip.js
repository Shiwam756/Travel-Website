import React from 'react'
import './Tripstyles.css'
import TripData from './TripData'
import Image1 from "../Assets/indonesia.jpg"
import Image2 from "../Assets/malaysia.jpg"
import Image3 from "../Assets/dubai.avif"

function Trip() {
  return (
    <>
    <div className='trip'>
<h1>Recent Trips</h1>
<p>You can discoverunique destinations using google maps</p>
<div className='tripcard'>
    <TripData
    image={Image1}
    heading="Trip in Indonesia"
    text="Indonesia, officially the Republic of Indonesia, is a transcontinental country spanning the southeastern part of Asia and western part of Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
    />
    <TripData
    image={Image2}
    heading="Trip in Malaysia"
    text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
    />
    <TripData
    image={Image3}
    heading="Trip in Dubai"
    text="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks."
    />
</div>
    </div>
    </>
  )
}

export default Trip