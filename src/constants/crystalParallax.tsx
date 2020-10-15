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

export interface crystalParallaxT {
  crystalBgImg: {
    width: string | number
    height: string | number
    transform: string | number
  }
  crystals: {
    [index: number]: any
    map: Function
  }
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

//* What's next: laying out crystals on parallax convas by adding styles in object and it rendering dynamically

const crystalParallax: crystalParallaxT = {
  crystalBgImg: {
    width: '100%',
    transform: 'translateZ(0px) scale(1)',
    height: '840px',
  },
  crystals: [
    <Crystal1
      feColorMatrixDx={20}
      feColorMatrixDy={30}
      feColorMatrixStdDeviation={10}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal2
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal3
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal4
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal5
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal6
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal7
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal8
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal9
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal10
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal11
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal12
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,

    <Crystal13
      feColorMatrixDx={2}
      feColorMatrixDy={12}
      feColorMatrixStdDeviation={2}
      image={require("../assets/pokeballSplash.png")}
      edgesColor={'#344EF6'} middleColor={'#F62E34'}
      feColorMatrixBackdropColor={feColorMatrixCrystalBackdropColor} />,
  ]
}



export default crystalParallax