import React, { useEffect, useState } from 'react'
import crystalParallaxDefault, { SelectCrystal, totalCrystals } from '../constants/crystalParallax'

export const SvgSizingWrapper = ({ children, overrideStyles }: { children, overrideStyles?: any }) => {
  return (
    <svg style={{ ...{ width: 300 }, ...overrideStyles }} viewBox="0 0 200 500">
      {children}
    </svg>
  )
}

function Crystals() {
  const [arrToMapOver, setArrToMapOver] = useState([])

  const mapOverTotalOfCrystals: any = () => {
    let arrToMapOver = []
    for (let i = 0; i < totalCrystals; i++) {
      arrToMapOver.push(1)
      console.log(arrToMapOver);
    }
    return arrToMapOver
  }

  useEffect(() => {
    const res = mapOverTotalOfCrystals()
    setArrToMapOver(res)
  }, [])

  return (
    <div>
      {arrToMapOver.map((props, index) =>
        <SvgSizingWrapper overrideStyles={{
          marginBottom: -500,
        }} key={index}>
          <SelectCrystal whatCrystal={index} componentProps={crystalParallaxDefault.crystals[0].componentProps} />
        </SvgSizingWrapper>
      )}
    </div>
  )
}

export default Crystals
