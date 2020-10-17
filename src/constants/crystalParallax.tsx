export interface SelectCrystalT {
  feColorMatrixDx,
  feColorMatrixDy, feColorMatrixStdDeviation,
  edgesColor, middleColor, feColorMatrixBackdropColor
  imageProps: {
    image: string
    x: number
    y: number
    height: number
    width: number
  }
}

export interface crystalPositionOnParallaxCanvasT {
  shardIndex: number
  zIndex: number
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

export const defaultCrystalData: crystalPositionOnParallaxCanvasT = {
  shardIndex: 0,
  zIndex: 0,
  crystalProps: {
    imageProps: {
      image: require("../assets/pokeballSplash.png"),
      x: 50,
      y: 10,
      height: 225,
      width: 225,
    },
    feColorMatrixDx: 2,
    feColorMatrixDy: 4,
    feColorMatrixStdDeviation: 1,
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
      zIndex: 0,
      crystalProps: {
        imageProps: {
          image: require("../assets/pokeballSplash.png"),
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 2,
        feColorMatrixDy: 4,
        feColorMatrixStdDeviation: 1,
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
      zIndex: 0,
      crystalProps: {
        imageProps: {
          image: require("../assets/pokeballSplash.png"),
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 2,
        feColorMatrixDy: 4,
        feColorMatrixStdDeviation: 1,
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
      zIndex: 0,
      crystalProps: {
        imageProps: {
          image: require("../assets/pokeballSplash.png"),
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 2,
        feColorMatrixDy: 4,
        feColorMatrixStdDeviation: 1,
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
      zIndex: 0,
      crystalProps: {
        imageProps: {
          image: require("../assets/pokeballSplash.png"),
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 2,
        feColorMatrixDy: 12,
        feColorMatrixStdDeviation: 2,
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

  //% left to do:
  //responsive designing
  //canvas height, background image (parallaxing);