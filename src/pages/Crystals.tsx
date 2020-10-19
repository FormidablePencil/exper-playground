import React, { useEffect, useState } from 'react'
import SelectCrystal from '../components/crystals/SelectCrystal'
import crystalParallaxDefault from '../constants/crystalParallax'
import { mapOverTotalOfCrystals } from '../helpers/mapOverTotalOfCrystals'

export const SvgSizingWrapper = ({ children, overrideStyles }: { children, overrideStyles?: any }) => {
  return (
    <svg style={{ ...{ width: 300 }, ...overrideStyles, }} viewBox="0 10 240 100">
      {children}
    </svg>
  )
}

function Crystals() {
  const [arrToMapOver, setArrToMapOver] = useState([])

  useEffect(() => {
    const createdArr = mapOverTotalOfCrystals()
    setArrToMapOver(createdArr)
  }, [])

  return (
    <div>
      {arrToMapOver.map((props, index) =>
        <SvgSizingWrapper overrideStyles={index === 0 ? { backgroundColor: 'orange' } : {}} key={index}>
          <SelectCrystal whatCrystal={index} crystalProps={crystalParallaxDefault.crystals[0].crystalProps} />
        </SvgSizingWrapper>
      )}
    </div>
  )
}

export default Crystals
