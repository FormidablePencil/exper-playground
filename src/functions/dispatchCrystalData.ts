import { crystalParallaxT } from "../constants/crystalParallax";
import { dispatchCrystalDataT } from "../hooks/useParallaxProperties";
import cloneDeep from 'lodash/cloneDeep';
import uniqueMediaQuery from "../helpers/uniqueMediaQuery";
import crystalDataMediaQueryReducer from "../helpers/crystalDataMediaQueryReducer";
import { compileMediaQueryDataToCrystalData } from "./pullDataFromMediaQueryRelativeToWindowWidth";
import crystalDataReducer from "../helpers/crystalDataReducer";


const mainCrystalDataReducer = (
  { type, payload }: dispatchCrystalDataT,
  { rawCrystalData, crystalData, setCrystalData, setRawCrystalData, crystalIndex }
) => {
  let newStateRaw: crystalParallaxT = cloneDeep(rawCrystalData);
  let newStateSourceOfTruth: crystalParallaxT = cloneDeep(crystalData);

  switch (type) {
    case 'update mediaQuery values':
      newStateRaw = updateMediaQueryValues(payload, newStateRaw, crystalIndex)
      setRawCrystalData(newStateRaw)
      break;

    case 'addMediaQuery':
      newStateRaw.crystals[crystalIndex].mediaQueries.push({
        mediaQueryWidth: uniqueMediaQuery({ crystalData: rawCrystalData, crystalIndex })/* must be different than any other mediaQueryWidth */
      })
      setRawCrystalData(newStateRaw)
      setCrystalData(newStateRaw)
      break;

    case 'removeMediaQuery':
      newStateRaw.crystals[crystalIndex].mediaQueries = newStateRaw.crystals[crystalIndex].mediaQueries.filter(item =>
        item.mediaQueryWidth !== payload.mediaQueryWidth)
      setRawCrystalData(newStateRaw)
      break;

    default:
      if (crystalData.crystals[crystalIndex].mediaQueryWidth) { /* if mediaQuery is present */
        newStateRaw = crystalDataMediaQueryReducer({
          type,
          payload: {
            newValue: payload.newValue,
          },
          crystalData: crystalData,
          crystalIndex, newState: newStateRaw
        })
        setRawCrystalData(newStateRaw)

        newStateSourceOfTruth = compileMediaQueryDataToCrystalData({
          rawCrystalData: newStateRaw, sourceOfTruthCrystalData: crystalData,
          windowWidth: window.innerWidth,
          removeMediaQueryWidth: true
        })
        setCrystalData(newStateSourceOfTruth)

      } else {/* if no mediaQuery present */
        newStateRaw = crystalDataReducer({ type, payload, crystalIndex, newState: newStateRaw })
        setRawCrystalData(newStateRaw)
        setCrystalData(newStateRaw)
      }
      break;
  }
}


const updateMediaQueryValues = (payload, newState: crystalParallaxT, crystalIndex) => {
  // find mediaQuery by intial value and change it at for the moded (map function)
  payload.moddedMediaQueryValues.map(item => {
    newState.crystals[crystalIndex].mediaQueries.map(mediaQuery => {
      if (mediaQuery.mediaQueryWidth === item.initial)
        mediaQuery.mediaQueryWidth = item.mod
      return mediaQuery
    })
    return item
  })
  return newState
}

export default mainCrystalDataReducer