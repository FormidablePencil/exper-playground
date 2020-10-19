import { useRef, useState } from 'react'
import crystalParallaxDefault, { crystalParallaxT, defaultCrystalData } from '../constants/crystalParallax'
import cloneDeep from 'lodash/cloneDeep';
import { sliderValuesT } from '../components/crystals/modeCrystalInputFields/components/RenderMediaQuerySliders'
import useCompileCrystalData from './useCompileCrystalData';
import useWindowSize from "./useWindowSize"
import mainCrystalDataReducer from '../functions/dispatchCrystalData';

export interface selectedForModeColorsT { middle, edge }
export interface dispatchCrystalDataT { type, payload?: { newValue?, moddedMediaQueryValues?: sliderValuesT[], mediaQueryWidth?} }

const useParallaxProperties = (): useParallaxPropertiesT => {
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)
  const [rawCrystalData, setRawCrystalData] = useState<crystalParallaxT>(crystalParallaxDefault)
  const [crystalData, setCrystalData] = useState<crystalParallaxT>({
    crystalBgImg: {
      width: '100%',
      transform: 'translateZ(0px) scale(1)',
      height: '840px',
    },
    crystals: crystalParallaxDefault.crystals
  })

  const prevCrystalMod = useRef(null) // so to not update state if everything is the same
  const windowWidth = useWindowSize().width


  /* compile only when screen width === mediaQuery that's stored in rawCrystalData */
  useCompileCrystalData({ prevCrystalMod, rawCrystalData, crystalData, setCrystalData, windowWidth })



  const updateRawAndSourceOfTruthCrystalData = (newStateRaw: crystalParallaxT) => {
    setRawCrystalData(newStateRaw)
    setCrystalData(newStateRaw)
  }



  const addSpecificCrystal = (index) => {
    let newState = cloneDeep(crystalData)
    const newComponent = cloneDeep(defaultCrystalData)
    newComponent.shardIndex = index
    newState.crystals[newState.crystals.length] = newComponent
    updateRawAndSourceOfTruthCrystalData(newState)
    setCrystalIndex(newState.crystals.length - 1)
  }



  const deleteCrystal = () => {
    let newState = cloneDeep(crystalData)
    newState.crystals.splice(crystalIndex, 1)
    updateRawAndSourceOfTruthCrystalData(newState)
    setRawCrystalData(newState)
    setCrystalIndex(prev => prev - 1)
  }



  const dispatchCrystalData = ({ type, payload }: dispatchCrystalDataT) => {
    mainCrystalDataReducer(
      { type, payload },
      { rawCrystalData, crystalData, setCrystalData, setRawCrystalData, crystalIndex }
    )
  }



  return {
    dispatchCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
    windowWidth,
  }
}

export default useParallaxProperties

export interface useParallaxPropertiesT {
  dispatchCrystalData, crystalData: crystalParallaxT,
  crystalIndex, setCrystalIndex,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  selectedForModeColors, setSelectedForModeColors,
  modMenuFixed, setModMenuFixed,
  addSpecificCrystal,
  deleteCrystal,
  windowWidth,
}