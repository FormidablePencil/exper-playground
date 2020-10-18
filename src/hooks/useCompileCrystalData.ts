import { useEffect, useState } from "react"
import crystalParallaxDefault, { crystalParallaxT } from "../constants/crystalParallax"
import cloneDeep from 'lodash/cloneDeep';
import useWindowSize from "./useWindowSize";

const useCompileCrystalData = () => {
  const [rawCrystalData, setRawCrystalData] = useState<crystalParallaxT>(crystalParallaxDefault)
  const [crystalData, setCrystalData] = useState<crystalParallaxT>({
    crystalBgImg: {
      width: '100%',
      transform: 'translateZ(0px) scale(1)',
      height: '840px',
    },
    crystals: [{
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
        feColorMatrixBackdropColor: '',
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
    }]
  })

  const screenWidth = 1000
  const windowSize = useWindowSize()
  console.log(windowSize)

  /* compile only when screen width === mediaQuery that's stored in crystalData */
  useEffect(() => {
    const gettingDataTailoredForCurrentScreenWidth = () => {
      let dataForCurrentScreenCrystalDataIfExists
      const copyRawCrystalData: crystalParallaxT = cloneDeep(rawCrystalData)
      copyRawCrystalData.crystals.map(crystal => {
        dataForCurrentScreenCrystalDataIfExists = crystal.mediaQueries.filter(item =>
          item.mediaQueryWidth === screenWidth)[0]
        return crystal
      })
      return dataForCurrentScreenCrystalDataIfExists
    }

    const dataForCurrentScreenCrystalDataIfExists = gettingDataTailoredForCurrentScreenWidth()
    if (dataForCurrentScreenCrystalDataIfExists)
      setCrystalData({
        crystalBgImg: rawCrystalData.crystalBgImg,
        crystals: [...rawCrystalData.crystals, ...dataForCurrentScreenCrystalDataIfExists]
      })
    else
      setCrystalData(rawCrystalData)
    // console.log(crystalData);/* final compiled product */

  }, [screenWidth])

  return {
    setCrystalData, crystalData,
    setRawCrystalData, rawCrystalData,
  }
}
export default useCompileCrystalData
