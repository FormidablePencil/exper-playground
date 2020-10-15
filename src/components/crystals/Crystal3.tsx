import React from 'react'

function crystal3({ image }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 376 355">
      <defs>
        <mask id="mask-crystal3" x="96" y="76" width="204" height="184" maskUnits="userSpaceOnUse">
          <g className="cls-9">
            <g transform="translate(-34.87 50.09)">
              <image width="204" height="184" transform="translate(130.87 25.91)"
                xlinkHref="data:image/png;base64,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" />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 3</title>
      <g className="cls-1">
        <g id="Shard_3" data-name="Shard 3">
          <polygon className="cls-4"
            points="297.55 219.47 262.84 107.76 198.53 78.61 133.55 115.55 98.4 237.72 253.05 257.45 297.55 219.47" />
          <g className="cls-5-crystal3">
            <g className="cls-6">
              <polygon className="cls-7"
                points="297.55 219.47 262.84 107.76 198.53 78.61 133.55 115.55 98.4 237.72 253.05 257.45 297.55 219.47" />
            </g>
            <image
            x='50' y='10'
            height="225"
            xlinkHref={image}
          />
          </g>
        </g>
        <g id="Sheens">
          <g id="Layer_21" data-name="Layer 21">
            <polygon className="cls-8" points="205.88 95.51 255.74 116.51 276.38 188.47 250.08 129.11 205.88 95.51" />
            <polygon className="cls-8" points="114.02 215.68 116.58 232.87 210.27 247.28 124.79 227.74 114.02 215.68" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default crystal3