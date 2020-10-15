import React from 'react'

function Crystal5({ image }) {
  return (
    <svg viewBox="0 0 463 390">
      <defs>
        <filter id="luminosity-noclip" x="67.31" y="83.31" width="291" height="219" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-color="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <mask id="mask-crystal5" x="96" y="76" width="291" height="219" maskUnits="userSpaceOnUse">
          <g className="cls-10">
            <g transform="translate(28.69 -7.31)">
              <image width="291" height="219" transform="translate(67.31 83.31)"
                xlinkHref="data:image/png;base64,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" />
            </g>
          </g>
        </mask>
      </defs>
      <title>Crystal 5</title>
      <g className="cls-1">
        <g id="Shard_9" data-name="Shard 9">
          <polygon className="cls-4"
            points="295.82 292.31 377.92 217.34 382.92 107.67 384.92 78.4 359.65 83.83 321.38 80.26 286.82 79.97 244.41 79.54 197.15 91.11 98.76 138.52 137.17 245.04 295.82 292.31" />
          <g className="cls-5-crystal5">
            <g className="cls-6">
              <polygon className="cls-7"
                points="295.82 292.31 377.92 217.34 382.92 107.67 384.92 78.4 359.65 83.83 321.38 80.26 286.82 79.97 244.41 79.54 197.15 91.11 98.76 138.52 137.17 245.04 295.82 292.31" />
              <image
                x='50' y='10'
                height="225"
                xlinkHref={image}
              />
            </g>
          </g>
        </g>
        <g id="Sheens">
          <polygon className="cls-8"
            points="357.6 99.42 254.92 92.99 200.59 102.75 119.65 140.67 119.65 171.72 132.07 148.87 199.26 116.94 259.8 104.08 367.35 105.19 378.44 84.34 357.6 99.42" />
          <polygon className="cls-8"
            points="295.55 280.89 227.63 215.63 142.72 237.02 159.94 225.56 229.33 209.99 285.39 257.83 295.55 280.89" />
          <g id="Layer_21" data-name="Layer 21">
            <polygon className="cls-8"
              points="259.75 211.63 286.7 200.4 347.06 167.05 362.08 166.73 291.24 206.74 259.75 211.63" />
            <polygon className="cls-8" points="375.72 170.99 367.55 211.59 310.91 269.8 375.72 213.85 375.72 170.99" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Crystal5
