import { crystalDataReducerT } from "./crystalDataReducer";

const crystalDataMediaQueryReducer = ({ action, e, crystalIndex, newState }: crystalDataReducerT) => {
  const { mediaQueryWidth, whatProperty } = action
  const targetValue = e.target.value

  newState.crystals[crystalIndex].mediaQueries.map(data => {
    if (data.mediaQueryWidth === mediaQueryWidth) {
      switch (action.whatProperty) {
        case 'feColorMatrixDx':
        case 'feColorMatrixDy':
        case 'feColorMatrixStdDeviation':
        case 'edgesColor':
        case 'middleColor':
        case 'feColorMatrixBackdropColor':
          data.crystalProps[whatProperty] = targetValue
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
          data.crystalProps.imageProps[whatProp] = targetValue
          break;

        case 'scale':
        case 'translateZ':
          data.positionInParallaxCanvas.transform[whatProperty] = targetValue
          break;

        case 'zIndex':
        case 'shardIndex':
          data[crystalIndex] = targetValue
          break;

        case 'top':
        case 'bottom':
        case 'left':
        case 'right':
          data.positionInParallaxCanvas.xYPosition[whatProperty] = targetValue
          break;

        default:
          break;
      }
    }
    return data
  })
  return newState
}

export default crystalDataMediaQueryReducer