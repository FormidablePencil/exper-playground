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

export interface mediaQueriesSelectCrystalT {
  feColorMatrixDx?,
  feColorMatrixDy?, feColorMatrixStdDeviation?,
  edgesColor?, middleColor?, feColorMatrixBackdropColor?,
  imageProps?: {
    image?: string
    x?: number
    y?: number
    height?: number
    width?: number
  }
}

export interface mediaQueriesDataAppentionT {
  mediaQueryWidth?: number
  shardIndex?: number
  zIndex?: number
  crystalProps?: mediaQueriesSelectCrystalT
  positionInParallaxCanvas?: {
    transform?: {
      scale?: string | number
      translateZ?: string | number
    }
    xYPosition?: {
      top?: string | number
      bottom?: string | number
      left?: string | number
      right?: string | number
    }
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
  mediaQueries?: mediaQueriesDataAppentionT[]
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
  },
  mediaQueries: [ /* append data for mediaQueries that is different than it's main */
    {
      mediaQueryWidth: 300,
      shardIndex: 0,
      zIndex: 0,
      crystalProps: {
        imageProps: {
          x: 50,
          y: 10,
          height: 225,
          width: 225,
        },
        feColorMatrixDx: 2,
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
        },
      }
    },
  ]
}

/* dummy data */
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
      mediaQueries: [ /* append data for mediaQueries that is different than it's main */
        {
          mediaQueryWidth: 300,
          shardIndex: 0,
          zIndex: 0,
          crystalProps: {
            imageProps: {
              x: 50,
              y: 10,
              height: 225,
              width: 225,
            },
            feColorMatrixDx: 2,
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
            },
          }
        },
      ]
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
      mediaQueries: []
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
      mediaQueries: []
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
      mediaQueries: []
    },
  ]
}


export default crystalParallaxDefault

  //% left to do:
  //canvas height, background image (parallaxing);

  //responsive designing: make gui to add media queries
  // Here's the plan:
  // append all additional data to the crystalData. 
  // There will be another source of truth that get's compiled everytime according to the screen size.
  // The source of truth will be the appened data plus primary data.

  // User will be able to make as many media queries at they like.