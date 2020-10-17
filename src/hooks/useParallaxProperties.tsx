import { useState } from 'react'
import crystalParallaxDefault, { crystalParallaxT, defaultCrystalData } from '../constants/crystalParallax'
import cloneDeep from 'lodash/cloneDeep';

export interface selectedForModeColorsT { middle, edge }

const useParallaxProperties = (): useParallaxPropertiesT => {
  const [crystalData, setCrystalData] = useState<crystalParallaxT>(crystalParallaxDefault)
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)

  const onChangeCrystalData = (whatProperty, e) => {
    const newState: crystalParallaxT = cloneDeep(crystalData);

    switch (whatProperty) {
      case 'feColorMatrixDx':
        newState.crystals[crystalIndex]
          .crystalProps.feColorMatrixDx = e.target.value
        break;
      case 'feColorMatrixDy':
        newState.crystals[crystalIndex]
          .crystalProps.feColorMatrixDy = e.target.value
        break;
      case 'feColorMatrixStdDeviation':
        newState.crystals[crystalIndex]
          .crystalProps.feColorMatrixStdDeviation = e.target.value
        break;
      case 'edgesColor':
        newState.crystals[crystalIndex]
          .crystalProps.edgesColor = e.target.value
        break;
      case 'middleColor':
        newState.crystals[crystalIndex]
          .crystalProps.middleColor = e.target.value
        break;
      case 'feColorMatrixBackdropColor':
        newState.crystals[crystalIndex]
          .crystalProps.feColorMatrixBackdropColor = e.target.value
        break;
      case 'image':
        newState.crystals[crystalIndex]
          .crystalProps.imageProps.image = e.target.value
        break;
      case 'imageHeight':
        newState.crystals[crystalIndex]
          .crystalProps.imageProps.height = e.target.value
        break;
      case 'imageWidth':
        newState.crystals[crystalIndex]
          .crystalProps.imageProps.width = e.target.value
        break;
      case 'imageX':
        newState.crystals[crystalIndex]
          .crystalProps.imageProps.x = e.target.value
        break;
      case 'imageY':
        newState.crystals[crystalIndex]
          .crystalProps.imageProps.y = e.target.value
        break;
      case 'scale':
        newState.crystals[crystalIndex]
          .positionInParallaxCanvas.transform.scale = e.target.value
        break;
      case 'translateZ':
        newState.crystals[crystalIndex]
          .positionInParallaxCanvas.transform.translateZ = e.target.value
        break;
      case 'zIndex':
        newState.crystals[crystalIndex].zIndex = e.target.value
        break;
      case 'top':
      case 'bottom':
      case 'left':
      case 'right':
        newState.crystals[crystalIndex]
          .positionInParallaxCanvas.xYPosition[whatProperty] = e.target.value
        break;
      default:
        break;
    }
    setCrystalData(newState)
  }

  const addSpecificCrystal = (index) => {
    let newState = cloneDeep(crystalData)
    const newComponent = cloneDeep(defaultCrystalData)
    newComponent.shardIndex = index
    newState.crystals[newState.crystals.length] = newComponent
    setCrystalData(newState)
    setCrystalIndex(newState.crystals.length - 1)
  }

  const deleteCrystal = () => {
    let newState = cloneDeep(crystalData)
    newState.crystals.splice(crystalIndex, 1)
    setCrystalData(newState)
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