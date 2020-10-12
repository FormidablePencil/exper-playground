import React from 'react'

const Shard1Shape = ({ fill }: { fill?: string }) =>
  <polygon fill={fill ?? '#64A4E9'} className="cls-1" points="309.2 341.39 232.48 279.83 0 439.55 242.31 462.12 309.2 341.39" />

const SvgAndImageClipPathReference = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1322.1 713.42">
      <title>Shapes of shards</title>
      {/* Background fill */}
      <Shard1Shape fill="#64A4E9" />
      {/* clipPath */}
      <clipPath id="clipCircle">
        <Shard1Shape />
      </clipPath>
      <linearGradient id="myGradient" gradientTransform="rotate(90)">
        <stop offset="5%" stopColor="gold" />
        <stop offset="95%" stopColor="red" />
      </linearGradient>
      {/* image clipped based on svg */}
      <image
        clipPath="url(#clipCircle)"
        x='15' y='250'
        height="225"
        xlinkHref={require("../../assets/pokeballSplash.png")}
      />
    </svg>
  )
}

export default SvgAndImageClipPathReference