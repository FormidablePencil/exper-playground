import { crystalParallaxT } from "../constants/crystalParallax";

const crystalDataReducer = ({ action, e, crystalIndex, newState }: crystalDataReducerT) => {
  const targetValue = e.target ? e.target.value : e
  const { whatProperty } = action

  switch (whatProperty) {
    case 'feColorMatrixDx':
    case 'feColorMatrixDy':
    case 'feColorMatrixStdDeviation':
    case 'edgesColor':
    case 'middleColor':
    case 'feColorMatrixBackdropColor':
      newState.crystals[crystalIndex]
        .crystalProps[whatProperty] = targetValue
      break;
    case 'image':
    case 'imageHeight':
    case 'imageWidth':
    case 'imageX':
    case 'imageY':
      let whatProp
      if (whatProperty === 'imageHeight') whatProp = 'height'
      if (whatProperty === 'imageWidth') whatProp = 'width'
      if (whatProperty === 'imageX') whatProp = 'x'
      if (whatProperty === 'imageY') whatProp = 'y'
      newState.crystals[crystalIndex].crystalProps.imageProps[whatProp] = targetValue
      break;
    case 'scale':
    case 'translateZ':
      newState.crystals[crystalIndex].positionInParallaxCanvas.transform[whatProperty] = targetValue
      break;
    case 'zIndex':
    case 'shardIndex':
      newState.crystals[crystalIndex][whatProperty] = targetValue
      break;
    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      newState.crystals[crystalIndex]
        .positionInParallaxCanvas.xYPosition[action.whatProperty] = targetValue
      break;
    default:
      break;
  }
  return newState
}

export default crystalDataReducer


export interface crystalDataReducerT {
  action: {
    whatProperty,
    mediaQueryWidth
  }
  e: { target: { value } }
  crystalIndex: number
  newState: crystalParallaxT
}