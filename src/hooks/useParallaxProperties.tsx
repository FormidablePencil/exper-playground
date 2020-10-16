import { useState } from 'react'
import crystalParallaxDefault, { crystalParallaxT } from '../constants/crystalParallax'

export interface selectedForModeColorsT { middle, edge }

function useParallaxProperties() {
  const [crystalProps, setCrystalProps] = useState<crystalParallaxT>(crystalParallaxDefault)
  const [crystalIndex, setCrystalIndex] = useState(0)
  const [crystalSelectionDistinction, setCrystalSelectionDistinction] = useState(true)
  const [selectedForModeColors, setSelectedForModeColors] = useState<selectedForModeColorsT>({ middle: '#000000', edge: '#FFFFFF' })

  const onChangeCrystalProps = (whatProperty, newValue) => {


    // setCrystalProps()
  }

  return {
    onChangeCrystalProps, crystalProps, setCrystalProps,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors
  }
}

export default useParallaxProperties
