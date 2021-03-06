import { useRef, useState } from 'react'
import crystalParallaxDefault, { crystalParallaxT, defaultCrystalData } from '../constants/crystalParallax'
import cloneDeep from 'lodash/cloneDeep';
import useCompileCrystalData from './useCompileCrystalData';
import useWindowSize from "./useWindowSize"
import mainCrystalDataReducer from '../reducers/mainCrystalDataReducer';
import { sliderValuesT } from '../components/modCrystalInputFields/RenderMediaQuerySliders';

export interface selectedForModeColorsT { middle, edge }
export interface dispatchCrystalDataT { type, payload?: { newValue?, moddedMediaQueryValues?: sliderValuesT[], mediaQueryWidth?} }

const useParallaxProperties = (): useParallaxPropertiesT => {
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)
  const [rawCrystalData, setRawCrystalData] = useState<crystalParallaxT>(crystalParallaxDefault)
  const [crystalData, setCrystalData] = useState<crystalParallaxT>(crystalParallaxDefault)

  const prevCrystalMod = useRef(null) // so to not update state if everything is the same
  const windowWidth = useWindowSize().width


  /* compile only when screen width === mediaQuery that's stored in rawCrystalData */
  useCompileCrystalData({ prevCrystalMod, rawCrystalData, crystalData, setCrystalData, windowWidth })



  const updateRawAndSourceOfTruthCrystalData = (state: crystalParallaxT) => {
    setRawCrystalData(state)
    setCrystalData(state)
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
    if (crystalData.crystals.length === 1) return
    let newState = cloneDeep(crystalData)
    newState.crystals.splice(crystalIndex, 1)
    updateRawAndSourceOfTruthCrystalData(newState)
    setCrystalIndex(prev => prev - 1)
  }



  const dispatchCrystalData = ({ type, payload }: dispatchCrystalDataT) => {
    mainCrystalDataReducer(
      { type, payload },
      {
        rawCrystalData, setRawCrystalData, crystalData, setCrystalData,
        crystalIndex, updateRawAndSourceOfTruthCrystalData
      }
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