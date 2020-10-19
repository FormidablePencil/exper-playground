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
  mediaQueryWidth: null,
  key: number,
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
  mediaQueryWidth: null,
  key: 9,
  shardIndex: 0,
  zIndex: 0,
  crystalProps: {
    imageProps: {
      image: require("../assets/pokeballSplash.png"),
      x: 200,
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
      mediaQueryWidth: 1000,
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
        edgesColor: '#3AEFF4', middleColor: '#45F44E',
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
      mediaQueryWidth: null,
      key: 8,
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
          mediaQueryWidth: 555,
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
            edgesColor: '#E057F4', middleColor: '#F44083',
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
        {
          mediaQueryWidth: 711,
          shardIndex: 9,
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
            edgesColor: '#F4DA8B', middleColor: '#F49DBB',

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
    // {
    //   key: 7,
    //   shardIndex: 2,
    //   zIndex: 0,
    //   crystalProps: {
    //     imageProps: {
    //       image: require("../assets/pokeballSplash.png"),
    //       x: 50,
    //       y: 10,
    //       height: 225,
    //       width: 225,
    //     },
    //     feColorMatrixDx: 2,
    //     feColorMatrixDy: 4,
    //     feColorMatrixStdDeviation: 1,
    //     edgesColor: '#5C8AE4', middleColor: '#F62E34',
    //     feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
    //   },
    //   positionInParallaxCanvas: {
    //     transform: {
    //       scale: 2,
    //       translateZ: 1
    //     },/* 'translateZ(1px) scale(1)' */
    //     xYPosition: {
    //       top: '100px',
    //       bottom: '',
    //       left: '100px',
    //       right: '',
    //     }
    //   },
    //   mediaQueries: []
    // },
    // {
    //   key: 6,
    //   shardIndex: 4,
    //   zIndex: 0,
    //   crystalProps: {
    //     imageProps: {
    //       image: require("../assets/pokeballSplash.png"),
    //       x: 50,
    //       y: 10,
    //       height: 225,
    //       width: 225,
    //     },
    //     feColorMatrixDx: 2,
    //     feColorMatrixDy: 4,
    //     feColorMatrixStdDeviation: 1,
    //     edgesColor: '#5C8AE4', middleColor: '#F62E34',
    //     feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
    //   },
    //   positionInParallaxCanvas: {
    //     transform: {
    //       scale: 2,
    //       translateZ: 1
    //     },/* 'translateZ(1px) scale(1)' */
    //     xYPosition: {
    //       top: '100px',
    //       bottom: '',
    //       left: '100px',
    //       right: '',
    //     }
    //   },
    //   mediaQueries: []
    // },
    // {
    //   key: 5,
    //   shardIndex: 1,
    //   zIndex: 0,
    //   crystalProps: {
    //     imageProps: {
    //       image: require("../assets/pokeballSplash.png"),
    //       x: 50,
    //       y: 10,
    //       height: 225,
    //       width: 225,
    //     },
    //     feColorMatrixDx: 2,
    //     feColorMatrixDy: 12,
    //     feColorMatrixStdDeviation: 2,
    //     edgesColor: '#5C8AE4', middleColor: '#F62E34',
    //     feColorMatrixBackdropColor: feColorMatrixCrystalBackdropColor,
    //   },
    //   positionInParallaxCanvas: {
    //     transform: {
    //       scale: .75,
    //       translateZ: 3
    //     },/* 'translateZ(1px) scale(1)' */
    //     xYPosition: {
    //       top: '100px',
    //       bottom: '',
    //       left: '',
    //       right: '800px',
    //     }
    //   },
    //   mediaQueries: []
    // },
  ]
}


export default crystalParallaxDefault

  //% left to do:
  //~ read the crystalData for mediaQuery indead for picking reducers
  // ~ gui for media queries
  // if no crystals, then show btn to add one (default one)
  // canvas height, background image (parallaxing);
  // check to see if all works