import React from 'react'

function ImgBtSvg() {
  return (
    <div>

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <PolygonShape />
        <clipPath id="clipCircle">
          <PolygonShape />
        </clipPath>
        <image
          clip-path="url(#clipCircle)"
          x='245' y='70'
          height="100" width="110"
          xlinkHref={require("../assets/pokeballSplash.png")}
        />
          <PolygonShape
            color='rgba(182,233,255,.9)'
             overlay={true} 
             />
      </svg>

      <Svgg />
    </div>
  )
}

export default ImgBtSvg

const PolygonShape = ({ color, overlay }: { color?: string, overlay?: boolean }) =>
  <polygon
    points={overlay ?"128.44,237.89 280.74,260.46 367.63,119.72 330.92,78.16" : "98.44,237.89 280.74,260.46 367.63,119.72 330.92,78.16"}
    transform="translate(34.359428,-16.186273)"
    fill={color ?? "#74a4c7"}
  />


const Svgg = () => {
  return (
    <>
      <svg
        width="110mm"
        height="197mm"
        viewBox="0 0 210 297"
      >
        <g
          className="cls-1"
          id="g937"
          transform="matrix(0.26458333,0,0,0.26458333,37.740271,93.016825)">
          <polygon
            className="cls-4"
            points="98.44,237.89 340.74,260.46 407.63,139.72 330.92,78.16"
            transform="translate(34.359428,-16.186273)">
          </polygon>
        </g>
      </svg>
    </>
  )
}