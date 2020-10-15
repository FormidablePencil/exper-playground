import React from 'react'
import Crystal1 from '../components/crystals/Crystal1'
import Crystal2 from '../components/crystals/Crystal2'

export interface crystalParallaxT {
  crystalBgImg: {
    width: string | number
    height: string | number
    transform: string | number
  }
  crystals: crystalsT[]
}
interface crystalsT {
  image?: string
  component?: any
  alt?: string
  styles: {
    top?: string | number
    bottom?: string | number
    left?: string | number
    right?: string | number
    transform: string
  }
}

/* Give shadow properties to shards */

const crystalParallax: crystalParallaxT = {
  crystalBgImg: {
    width: '100%',
    transform: 'translateZ(0px) scale(1)',
    height: '840px',
  },
  crystals: [
    {
      component: <Crystal1
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#79E969'}
        middleColor={'#E9E642'}
      />,
      // image: require('../assets/crystalInSingular.svg'),
      alt: 'stars',
      styles: {
        top: '150px',
        left: 100,
        transform: 'translateZ(5px) scale(1)',
      },
    },
    {
      component: <Crystal2
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#79E969'}
        middleColor={'#E9E642'}
      />,
      alt: 'polygons',
      styles: {
        top: '125px',
        transform: 'translateZ(2px) scale(1)',
      },
    },
  ]
}



export default crystalParallax