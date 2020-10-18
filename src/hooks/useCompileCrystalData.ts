import { useEffect, useRef, useState } from "react"
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
    crystals: crystalParallaxDefault.crystals
  })
  // const [prevCrystalMod, setPrevCrystalMod] = useState(null)

  const prevCrystalMod = useRef(null) // so to not update state if everything is the same



  const compileCrystalDataAccordingToMediaQuery = (dataForCurrentScreenCrystalDataIfExists, crystalKey) => {
    let copyCrystalData: crystalParallaxT = cloneDeep(crystalData)
    let mod = false
    copyCrystalData.crystals = copyCrystalData.crystals.map(crystal => {
      if (crystal.key === crystalKey) {
        mod = true
        prevCrystalMod.current = crystal.mediaQueryWidth
        return { ...crystal, ...dataForCurrentScreenCrystalDataIfExists }
      } else return crystal
    })
    if (prevCrystalMod.current !== dataForCurrentScreenCrystalDataIfExists.mediaQueryWidth && mod)
      return copyCrystalData
    else return null
  }


  const pullRawCrystalDataOfMediaQuery = (): { dataForCurrentScreenCrystalDataIfExists, crystalKey } => {
    let dataForCurrentScreenCrystalDataIfExists
    let crystalKey
    const copyRawCrystalData: crystalParallaxT = cloneDeep(rawCrystalData)

    copyRawCrystalData.crystals.map(crystal => {
      // order: if mediaQueryWidth > window.width with the largest mediaQueryWidth taking precedence over smaller mediaQueryWidth
      let mediaQueryGreaterThanWindowWidth = []
      const reducer = (first, second) => first < second ? first : second;
      crystalKey = crystal.key

      for (let i = 0; i < crystal.mediaQueries.length; i++) {
        if (crystal.mediaQueries[i].mediaQueryWidth > window.innerWidth)
          mediaQueryGreaterThanWindowWidth.push(crystal.mediaQueries[i].mediaQueryWidth)
      }
      if (mediaQueryGreaterThanWindowWidth.length > 0) {
        dataForCurrentScreenCrystalDataIfExists = crystal.mediaQueries.filter(mediaQuery =>
          mediaQuery.mediaQueryWidth === mediaQueryGreaterThanWindowWidth.reduce(reducer))[0]
      } else
        dataForCurrentScreenCrystalDataIfExists = crystal
      return crystal
    })



    return { dataForCurrentScreenCrystalDataIfExists, crystalKey }
  }


  const updateCrystalAccordingToMediaQueries = async () => {
    let { dataForCurrentScreenCrystalDataIfExists, crystalKey } = pullRawCrystalDataOfMediaQuery()
    if (!dataForCurrentScreenCrystalDataIfExists) return
    let compiledCrystalDataAccordingly = compileCrystalDataAccordingToMediaQuery(dataForCurrentScreenCrystalDataIfExists, crystalKey)
    if (compiledCrystalDataAccordingly)
      setCrystalData(compiledCrystalDataAccordingly)
  }


  const windowWidth = useWindowSize().width
  /* compile only when screen width === mediaQuery that's stored in rawCrystalData */
  useEffect(() => {
    updateCrystalAccordingToMediaQueries()
  }, [windowWidth])


  return {
    setCrystalData, crystalData,
    setRawCrystalData, rawCrystalData,
  }
}
export default useCompileCrystalData
