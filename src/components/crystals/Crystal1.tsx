import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'

function Crystal1({
  onClickHandler,
  image, edgesColor, middleColor,
  feColorMatrixBackdropColor, feColorMatrixStdDeviation, feColorMatrixDx, feColorMatrixDy
}: {
  onClickHandler?: any
  image, edgesColor, middleColor,
  feColorMatrixBackdropColor, feColorMatrixStdDeviation,
  feColorMatrixDx, feColorMatrixDy
}) {
  return (
    <>
      <svg viewBox="0 0 542 423"><defs>
        <CrystalBackdrop
          feColorMatrixDx={feColorMatrixDx}
          feColorMatrixDy={feColorMatrixDy}
          feColorMatrixStdDeviation={feColorMatrixStdDeviation}
          feColorMatrixBackdropColor={feColorMatrixBackdropColor}
          nameId='filter-crystal1' />
        <mask
          id="mask-crystal1" x="97" y="76" width="369" height="252" maskUnits="userSpaceOnUse">
          <g className="">{/* //~ removed cls-9 */}
            <g transform="translate(-68 51)">

              <image width="369" height="252" transform="translate(165 25)" xlinkHref="data:image/png;base64,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" />

            </g>
          </g>
        </mask>
      </defs><title>Crystal 1</title><g className="cls-1"><g id="Shard_1" data-name="Shard 1">

        <polygon filter="url(#filter-crystal1)" fill={edgesColor} points="436.74 296.81 463.91 133.79 287.98 78.09 99.15 150.09 177.94 290.7 287.3 325.34 436.74 296.81"></polygon>
        <g onClick={onClickHandler} className="cls-5-crystal1"><g className="cls-6">
          <polygon fill={middleColor} points="436.74 296.81 463.91 133.79 287.98 78.09 99.15 150.09 177.94 290.7 287.3 325.34 436.74 296.81" />
          <image
            x='50' y='10'
            height="225"
            xlinkHref={image}
          />

        </g></g></g><g id="Sheens"><polygon className="cls-8" points="449.9 175.04 409.83 273.94 281.75 310.2 294.4 312.88 426.21 287.68 449.9 175.04" /><polygon className="cls-8" points="289.79 88.33 122.57 154.9 145.87 212.05 145.25 199.06 133.7 157.62 289.79 88.33" /></g></g>
      </svg>
    </>
  )
}

export default Crystal1
