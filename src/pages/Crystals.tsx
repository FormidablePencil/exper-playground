import React from 'react'
import crystalParallax from '../constants/crystalParallax'

export const SvgSizingWrapper = ({ children }) => {
  return (
    <svg style={{ width: 300 }} viewBox="0 0 500 500">
      {children}
    </svg>
  )
}

function Crystals() {
  return (
    <div>
      {crystalParallax.crystals.map((component, index) =>
      <SvgSizingWrapper key={index}>
          {component}
        </SvgSizingWrapper>
      )}
    </div>
  )
}

export default Crystals
