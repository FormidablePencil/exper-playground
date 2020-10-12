import React from 'react'

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

const crystalParallax: crystalParallaxT = {
  crystalBgImg: {
    width: '100%',
    transform: 'translateZ(0px) scale(1)',
    height: '840px',
  },
  crystals: [
    {
      component: <></>,
      image: require('../assets/crystalInSingular.svg'),
      alt: 'stars',
      styles: {
        top: '150px',
        left: 100,
        transform: 'translateZ(5px) scale(1)',
      },
    },
    {
      image: 'https://s3-ap-southeast-2.amazonaws.com/daily-fire-assets/codepen-assets/polygons.png',
      alt: 'polygons',
      styles: {
        top: '125px',
        transform: 'translateZ(2px) scale(1)',
      },
    },
  ]
}



export default crystalParallax