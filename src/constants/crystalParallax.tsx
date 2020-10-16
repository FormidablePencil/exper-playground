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

export interface crystalPositionOnParallaxCanvasT {
  component: Object
  positionInParallaxCanvas: {
    transform: string
    top?: string | number
    bottom?: string | number
    left?: string | number
    right?: string | number
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
0     0     0     .2    0
`

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

const crystalParallax: crystalParallaxT = {
  crystalBgImg: {
    width: '100%',
    transform: 'translateZ(0px) scale(1)',
    height: '840px',
  },
  crystals: [
    {
      component: <Crystal1
        feColorMatrixDx={20}
        feColorMatrixDy={30}
        feColorMatrixStdDeviation={10}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(0px) scale(1)',
        top: 30,
        right: 400
      },
    },
    {
      component: <Crystal2
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal3
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal4
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component:
        <Crystal5
          feColorMatrixDx={2}
          feColorMatrixDy={12}
          feColorMatrixStdDeviation={2}
          image={require("../assets/pokeballSplash.png")}
          edgesColor={'#344EF6'} middleColor={'#F62E34'}
          feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal6
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component:
        <Crystal7
          feColorMatrixDx={2}
          feColorMatrixDy={12}
          feColorMatrixStdDeviation={2}
          image={require("../assets/pokeballSplash.png")}
          edgesColor={'#344EF6'} middleColor={'#F62E34'}
          feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal8
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal9
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal10
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal11
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal12
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(1px) scale(1)',
        top: 30,
        left: 100,
      },
    },
    {
      component: <Crystal13
        feColorMatrixDx={2}
        feColorMatrixDy={12}
        feColorMatrixStdDeviation={2}
        image={require("../assets/pokeballSplash.png")}
        edgesColor={'#344EF6'} middleColor={'#F62E34'}
        feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
      positionInParallaxCanvas: {
        transform: 'translateZ(4px) scale(1)',
        top: 30,
        left: 300,
      },
    },
  ]
}



export default crystalParallax