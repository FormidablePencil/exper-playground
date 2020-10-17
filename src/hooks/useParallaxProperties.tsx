import { useState } from 'react'
import crystalParallaxDefault, { crystalParallaxT, defaultCrystalProps } from '../constants/crystalParallax'
import cloneDeep from 'lodash/cloneDeep';

export interface selectedForModeColorsT { middle, edge }

function useParallaxProperties() {
  const [crystalProps, setCrystalProps] = useState<crystalParallaxT>(crystalParallaxDefault)
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })
  const [modMenuFixed, setModMenuFixed] = useState(true)

  const onChangeCrystalProps = (whatProperty, e) => {
    const newState = cloneDeep(crystalProps);

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
          .crystalProps.image = e.target.value
        break;
      case 'scale':
        newState.crystals[crystalIndex]
          .positionInParallaxCanvas.transform.scale = e.target.value
        break;
      case 'translateZ':
        newState.crystals[crystalIndex]
          .positionInParallaxCanvas.transform.translateZ = e.target.value
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
    setCrystalProps(newState)
  }

  const addSpecificCrystal = (index) => {
    let newState = cloneDeep(crystalProps)
    const newComponent = cloneDeep(defaultCrystalProps)
    newComponent.shardIndex = index
    newState.crystals[newState.crystals.length] = newComponent
    setCrystalProps(newState)
    setCrystalIndex(newState.crystals.length - 1)
  }

  const deleteCrystal = () => {
    let newState = cloneDeep(crystalProps)
    newState.crystals.splice(crystalIndex, 1)
    setCrystalProps(newState)
    setCrystalIndex(prev => prev - 1)
  }

  return {
    onChangeCrystalProps, crystalProps, setCrystalProps,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
  }
}

export default useParallaxProperties
