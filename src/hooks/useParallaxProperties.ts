import { useState } from 'react'
import { crystalParallaxT, defaultCrystalData } from '../constants/crystalParallax'
import cloneDeep from 'lodash/cloneDeep';
import crystalDataReducer from '../helpers/crystalDataReducer';
import crystalDataMediaQueryReducer from '../helpers/crystalDataMediaQueryReducer';
import useCompileCrystalData from '../hooks/useCompileCrystalData';
import useWindowSize from './useWindowSize';
import uniqueMediaQuery from '../helpers/uniqueMediaQuery';

export interface selectedForModeColorsT { middle, edge }

const useParallaxProperties = (): useParallaxPropertiesT => {
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)

  const windowWidth = useWindowSize().width

  const {
    setCrystalData, crystalData,
    setRawCrystalData,
  } = useCompileCrystalData({ windowWidth })


  const updateRawAndSourceOfTruthCrystalData = (newState) => {
    setRawCrystalData(newState)
    setCrystalData(newState)
  }

  // % save new mediaQuery values 

  const updateMediaQueryValues = (action, newState: crystalParallaxT) => {
    const { payload } = action
    // find mediaQuery by intial value and change it at for the moded (map function)
    payload.map(item => {
      newState.crystals[crystalIndex].mediaQueries.map(mediaQuery => {
        if (mediaQuery.mediaQueryWidth === item.initial)
          mediaQuery.mediaQueryWidth = item.mod
        return mediaQuery
      })
      return item
    })
    return newState
  }

  const onChangeCrystalData = ({ action }, e) => {
    let newState: crystalParallaxT = cloneDeep(crystalData);

    if (action.type === 'update mediaQuery values') {

      newState = updateMediaQueryValues(action, newState)

    } else if (action.type === 'addMediaQuery') {
      newState.crystals[crystalIndex].mediaQueries.push({
        mediaQueryWidth: uniqueMediaQuery({ crystalData, crystalIndex })/* must be different than any other mediaQueryWidth */
      })
    } else if (action.type === 'removeMediaQuery') {
      newState.crystals[crystalIndex].mediaQueries = newState.crystals[crystalIndex].mediaQueries.filter(item =>
        item.mediaQueryWidth !== action.mediaQueryWidth)
    } else if (crystalData.crystals[crystalIndex].mediaQueryWidth)/* if mediaQuery present */
      newState = crystalDataMediaQueryReducer({ action, e, crystalIndex, newState })
    else
      newState = crystalDataReducer({ action, e, crystalIndex, newState })
    // console.log(newState)
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
    windowWidth,
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
  windowWidth,
}