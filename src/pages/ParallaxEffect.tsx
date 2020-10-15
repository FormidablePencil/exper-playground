import React from 'react'
import Crystal1 from '../components/crystals/Crystal1'
import Crystal2 from '../components/crystals/Crystal2'
import { SvgSizingWrapper } from '../pages/Crystals'

import '../styles/main.modules.css'

function ParallaxEffect() {
  return (
    <div className='parallaxContainer'>
      <div className="parallax-container">
        <div className='background__parallax' />
        {/* <img alt='demo' className="background__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/dotted-background.png" /> */}
        <img alt='demo' className="middle__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/stars.png" />
        <img alt='demo' className="foreground__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/polygons.png" />
      </div>
    </div>
  )
}

export default ParallaxEffect
