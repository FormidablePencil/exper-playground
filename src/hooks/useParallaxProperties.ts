import { useState } from 'react'
import crystalParallaxDefault, { crystalParallaxT, defaultCrystalData } from '../constants/crystalParallax'
import cloneDeep from 'lodash/cloneDeep';
import crystalDataReducer from '../helpers/crystalDataReducer';
import crystalDataMediaQueryReducer from '../helpers/crystalDataMediaQueryReducer';
import useCompileCrystalData from '../hooks/useCompileCrystalData';

export interface selectedForModeColorsT { middle, edge }

const useParallaxProperties = (): useParallaxPropertiesT => {
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)

  const {
    setCrystalData, crystalData,
    setRawCrystalData,
  } = useCompileCrystalData()

  const updateRawAndSourceOfTruthCrystalData = (newState) => {
    setRawCrystalData(newState)
    setCrystalData(newState)
  }

  const onChangeCrystalData = ({ action }, e) => {
    let newState: crystalParallaxT = cloneDeep(crystalData);
    if (action.type === 'mediaQuery')
      newState = crystalDataMediaQueryReducer({ action, e, crystalIndex, newState })
    else
      newState = crystalDataReducer({ action, e, crystalIndex, newState })
    updateRawAndSourceOfTruthCrystalData(newState)
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

  return {
    onChangeCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
  }
}

export default useParallaxProperties

export interface useParallaxPropertiesT {
  onChangeCrystalData, crystalData: crystalParallaxT,
  crystalIndex, setCrystalIndex,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  selectedForModeColors, setSelectedForModeColors,
  modMenuFixed, setModMenuFixed,
  addSpecificCrystal,
  deleteCrystal,
}