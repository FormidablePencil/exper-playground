import React from 'react'
import { defaultCrystalData, SelectCrystalT } from "../../constants/crystalParallax"
import Crystal1 from './Crystal1'
import Crystal2 from './Crystal2'
import Crystal3 from './Crystal3'
import Crystal4 from './Crystal4'
import Crystal5 from './Crystal5'
import Crystal6 from './Crystal6'
import Crystal7 from './Crystal7'
import Crystal8 from './Crystal8'
import Crystal9 from './Crystal9'
import Crystal10 from './Crystal10'
import Crystal11 from './Crystal11'
import Crystal12 from './Crystal12'
import Crystal13 from './Crystal13'



const SelectCrystal = ({ onClickHandler, whatCrystal, crystalProps }:
  { onClickHandler?: Function, whatCrystal: number, crystalProps?: SelectCrystalT }) => {
  let componentProps
  if (!crystalProps)
    componentProps = { onClickHandler, ...defaultCrystalData.crystalProps, browserNotSupported: true }
  else
    componentProps = { onClickHandler, ...crystalProps, browserNotSupported: true }

  const allCrystalComponents = [
    <Crystal1 {...componentProps} />,
    <Crystal2 {...componentProps} />,
    <Crystal3 {...componentProps} />,
    <Crystal4 {...componentProps} />,
    <Crystal5 {...componentProps} />,
    <Crystal6 {...componentProps} />,
    <Crystal7 {...componentProps} />,
    <Crystal8 {...componentProps} />,
    <Crystal9 {...componentProps} />,
    <Crystal10 {...componentProps} />,
    <Crystal11 {...componentProps} />,
    <Crystal12 {...componentProps} />,
    <Crystal13 {...componentProps} />,
  ]
  return (
    <>{allCrystalComponents[whatCrystal]}</>
  )
}

export default SelectCrystal