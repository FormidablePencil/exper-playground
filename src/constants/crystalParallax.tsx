import React from 'react'
import Crystal1 from '../components/crystals/Crystal1'
import Crystal2 from '../components/crystals/Crystal2'
import Crystal3 from '../components/crystals/Crystal3'
import Crystal4 from '../components/crystals/Crystal4'
import Crystal5 from '../components/crystals/Crystal5'
import Crystal6 from '../components/crystals/Crystal6'
import Crystal7 from '../components/crystals/Crystal7'
import Crystal8 from '../components/crystals/Crystal8'
import Crystal9 from '../components/crystals/Crystal9'
import Crystal10 from '../components/crystals/Crystal10'
import Crystal11 from '../components/crystals/Crystal11'
import Crystal12 from '../components/crystals/Crystal13'
import Crystal13 from '../components/crystals/Crystal12'

interface SelectCrystalT {
  feColorMatrixDx,
  feColorMatrixDy, feColorMatrixStdDeviation,
  image, edgesColor, middleColor, feColorMatrixBackdropColor
}

export interface crystalPositionOnParallaxCanvasT {
  componentProps: SelectCrystalT
  positionInParallaxCanvas: {
    transform: {
      scale: string | number
      translateZ: string | number
    }
    xYPosition: {
      top: string | number
      bottom: string | number
      left: string | number
      right: string | number
    }
  }
}

export interface crystalParallaxT {
  crystalBgImg: {
    width: string | number
    height: string | number
    transform: string | number
  }
  crystals: crystalPositionOnParallaxCanvasT[]
}

const feColorMatrixCrystalBackdropColor = `
0     0     0     0     0
0     0     0     0     0
0     0     0     0     0
0     0     0    .2     0
`

export const totalCrystals = 13

const crystalParallaxDefault: crystalParallaxT = {
  crystalBgImg: {
    width: '100%',
    transform: 'translateZ(0px) scale(1)',
    height: '840px',
  },
  crystals: [
    {
      componentProps: {
        feColorMatrixDx: 2,
        feColorMatrixDy: 12,
        feColorMatrixStdDeviation: 2,
        image: require("../assets/pokeballSplash.png"),
        edgesColor: '#5C8AE4', middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 4,
          translateZ: 1
        },/* 'translateZ(1px) scale(1)' */
        xYPosition: {
          top: 100,
          bottom: null,
          left: null,
          right: 100,
        }
      },
    },
    {
      componentProps: {
        feColorMatrixDx: 2,
        feColorMatrixDy: 12,
        feColorMatrixStdDeviation: 2,
        image: require("../assets/pokeballSplash.png"),
        edgesColor: '#5C8AE4', middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 1,
          translateZ: 3
        },/* 'translateZ(1px) scale(1)' */
        xYPosition: {
          top: 100,
          bottom: null,
          left: 100,
          right: null,
        }
      },
    },
  ]
}

export const SelectCrystal = ({ onClickHandler, whatCrystal, componentProps }: { onClickHandler?: Function, whatCrystal: number, componentProps: SelectCrystalT }) => {
  const crystalProps = { onClickHandler, ...componentProps }
  const allCrystalComponents = [
    <Crystal1 {...crystalProps} />,
    <Crystal2 {...crystalProps} />,
    <Crystal3 {...crystalProps} />,
    <Crystal4 {...crystalProps} />,
    <Crystal5 {...crystalProps} />,
    <Crystal6 {...crystalProps} />,
    <Crystal7 {...crystalProps} />,
    <Crystal8 {...crystalProps} />,
    <Crystal9 {...crystalProps} />,
    <Crystal10 {...crystalProps} />,
    <Crystal11 {...crystalProps} />,
    <Crystal12 {...crystalProps} />,
    <Crystal13 {...crystalProps} />,
  ]
  return (
    <>{allCrystalComponents[whatCrystal]}</>
  )
}

export default crystalParallaxDefault

// customizable shard properties on parallax canvas
//~ location 
//~ size
//~ shadow color, position and deviation of all
//~ images
//~ edgeColor
//~ middleColor
//~ what shard
//~ option to add more space down bottom

/* Positioning: left, right, top, bottom, transform: 'translateZ(1px) scale(1)',  */

//* What's next: laying out crystals on parallax convas by adding styles in object and it rendering dynamically
