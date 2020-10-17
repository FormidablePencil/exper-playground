export interface SelectCrystalT {
  feColorMatrixDx,
  feColorMatrixDy, feColorMatrixStdDeviation,
  image, edgesColor, middleColor, feColorMatrixBackdropColor
}

export interface crystalPositionOnParallaxCanvasT {
  shardIndex: number
  crystalProps: SelectCrystalT
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

export const defaultCrystalProps: crystalPositionOnParallaxCanvasT = {
  shardIndex: 0,
  crystalProps: {
    feColorMatrixDx: 2,
    feColorMatrixDy: 4,
    feColorMatrixStdDeviation: 1,
    image: require("../assets/pokeballSplash.png"),
    edgesColor: '#5C8AE4', middleColor: '#F62E34',
    feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
  },
  positionInParallaxCanvas: {
    transform: {
      scale: 2,
      translateZ: 1
    },/* 'translateZ(1px) scale(1)' */
    xYPosition: {
      top: '100px',
      bottom: '',
      left: '100px',
      right: '',
    }
  }
}

const crystalParallaxDefault: crystalParallaxT = {
  crystalBgImg: {
    width: '100%',
    transform: 'translateZ(0px) scale(1)',
    height: '840px',
  },
  crystals: [
    {
      shardIndex: 12,
      crystalProps: {
        feColorMatrixDx: 2,
        feColorMatrixDy: 4,
        feColorMatrixStdDeviation: 1,
        image: require("../assets/pokeballSplash.png"),
        edgesColor: '#5C8AE4', middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 2,
          translateZ: 1
        },/* 'translateZ(1px) scale(1)' */
        xYPosition: {
          top: '100px',
          bottom: '',
          left: '100px',
          right: '',
        }
      },
    },
    {
      shardIndex: 2,
      crystalProps: {
        feColorMatrixDx: 2,
        feColorMatrixDy: 4,
        feColorMatrixStdDeviation: 1,
        image: require("../assets/pokeballSplash.png"),
        edgesColor: '#5C8AE4', middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 2,
          translateZ: 1
        },/* 'translateZ(1px) scale(1)' */
        xYPosition: {
          top: '100px',
          bottom: '',
          left: '100px',
          right: '',
        }
      },
    },
    {
      shardIndex: 4,
      crystalProps: {
        feColorMatrixDx: 2,
        feColorMatrixDy: 4,
        feColorMatrixStdDeviation: 1,
        image: require("../assets/pokeballSplash.png"),
        edgesColor: '#5C8AE4', middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
      },
      positionInParallaxCanvas: {
        transform: {
          scale: 2,
          translateZ: 1
        },/* 'translateZ(1px) scale(1)' */
        xYPosition: {
          top: '100px',
          bottom: '',
          left: '100px',
          right: '',
        }
      },
    },
    {
      shardIndex: 1,
      crystalProps: {
        feColorMatrixDx: 2,
        feColorMatrixDy: 12,
        feColorMatrixStdDeviation: 2,
        image: require("../assets/pokeballSplash.png"),
        edgesColor: '#5C8AE4', middleColor: '#F62E34',
        feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
      },
      positionInParallaxCanvas: {
        transform: {
          scale: .75,
          translateZ: 3
        },/* 'translateZ(1px) scale(1)' */
        xYPosition: {
          top: '100px',
          bottom: '',
          left: '',
          right: '800px',
        }
      },
    },
  ]
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

  // feColorMatrixDx
  // feColorMatrixDy
  // feColorMatrixStdDeviation
  // feColorMatrixBackdropColor
  // edgesColor
  // middleColor

  // transform: translateZ(1px)
  // transform: scale(1)
  // top, bottom, left, right 

  //% left to do:

  // image

  // image sizing and positioning
  // zIndex

  //responsive designing