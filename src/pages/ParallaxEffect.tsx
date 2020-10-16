import React from 'react'
import Crystal1 from '../components/crystals/Crystal1'
import { SvgSizingWrapper } from './Crystals'

function ParallaxEffect() {
  return (
    <div className='parallaxContainer'>
      <div className="parallax-container">
        <div className='background__parallax' />
        {/* <img alt='demo' className="background__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/dotted-background.png" /> */}
        <img alt='demo' className="middle__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/stars.png" />
        <div className='middle__image' style={{ transform: 'translateZ(2px) scale(1)', position: "absolute", top: 30, right: 100 }}>
        <SvgSizingWrapper>
          <Crystal1
            feColorMatrixDx={20}
            feColorMatrixDy={30}
            feColorMatrixStdDeviation={10}
            image={require("../assets/pokeballSplash.png")}
            edgesColor={'#344EF6'} middleColor={'#F62E34'}
            feColorMatrixBackdropColor={`
            0     0     0     0     0
            0     0     0     0     0
            0     0     0     0     0
            0     0     0     .2    0
            `} />,
          </SvgSizingWrapper>
      </div>
        <img alt='demo' className="foreground__image" src="https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/polygons.png" />
      </div>
    </div>
  )
}

export default ParallaxEffect
