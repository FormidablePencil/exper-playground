import React from 'react'

function CrystalBackdrop({ nameId, feColorMatrixBackdrop }) {
  return (
    <filter id={nameId} x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceGraphic" dx="5" dy="5" />
      <feColorMatrix result="matrixOut" in="offOut" type="matrix"
        values={feColorMatrixBackdrop} />
      <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  )
}

export default CrystalBackdrop
