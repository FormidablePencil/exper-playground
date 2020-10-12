import React from 'react'

function ImgBtSvg() {
  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000.2 300.29">
        <title>Crystal Without Anything</title>
        <PolygonShape />
        <clipPath id="clipCircle">
          <PolygonShape />
        </clipPath>
        <image
          clip-path="url(#clipCircle)"
          x='225' y='70'
          height="100" width="110"
          xlinkHref={require("../assets/pokeballSplash.png")}
        />
      </svg> */}

      <Shards />
    </div>
  )
}

export default ImgBtSvg


const Shards = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1322.1 713.42">
      <title>Shapes of shards</title>
      <polygon fill='#3D515B' className="cls-1" points="704.73 151.95 585.82 79.48 534.06 180.56 561.67 244.83 626.95 278.19 704.73 242.1 704.73 151.95" />
      <polygon fill='#3D515B' className="cls-1" points="1173.67 140.85 1138.95 29.15 1074.64 0 1009.67 36.94 974.51 159.1 1129.16 178.84 1173.67 140.85" />

      <Shard />

      <polygon fill='#3D515B' className="cls-1" points="489.93 281.11 365.16 281.51 359.19 383.34 489.93 281.11" />
      <polygon fill='#3D515B' className="cls-1" points="616 370.98 580.01 326.61 379.72 440.42 403.28 466.98 600.55 413.47 616 370.98" />
      <polygon fill='#3D515B' className="cls-1" points="913.41 343.4 1018.06 293.88 1110.09 221.47 1112.89 214.69 941.68 203.95 743.37 257.67 692.44 366.06 806.67 443.61 851.05 540.08 949.85 449.17 913.41 343.4" />
      <polygon fill='#3D515B' className="cls-1" points="1322.1 163.28 1290.29 151.56 1157.57 218.04 1115.78 286.53 1115.78 290.39 1220.44 291.52 1276.94 270.93 1322.1 163.28" />
      <polygon fill='#3D515B' className="cls-1" points="1179.38 541.97 1261.49 467 1266.49 357.34 1268.49 328.07 1243.21 333.49 1204.94 329.92 1170.39 329.64 1127.98 329.21 1080.71 340.77 982.33 388.18 1020.74 494.71 1179.38 541.97" />
      <polygon fill='#3D515B' className="cls-1" points="297.85 436.7 328.71 424.39 375.35 532.05 349.17 582.68 273.05 650.99 251.55 569.68 297.85 436.7" />
      <polygon fill='#3D515B' className="cls-1" points="519.94 600.71 558.43 496.86 549.25 498.77 458.05 569.68 476.43 620.48 519.94 600.71" />
      <polygon fill='#3D515B' className="cls-1" points="715.33 631.32 632.12 508.53 569.45 669.62 589.61 703.89 622.59 713.42 672.07 694.36 715.33 631.32" />
      <polygon fill='#3D515B' className="cls-1" points="836.1 618.67 793.21 520.99 681.42 446.22 736.22 543.72 836.1 618.67" />
      <polygon fill='#3D515B' className="cls-1" points="1268.49 696.93 1122.17 590.82 951.55 540.08 858.64 626.74 917.28 677.68 1268.49 696.93" />
      {/* <image
        x='160' y='235'
        height="225"
        xlinkHref={require("../assets/crystalInSingular.svg")}
      /> */}
    </svg>
  )
}

const Shard = () => {
  return (
    <>
      {/* Background fill */}
      <Shard1Shape fill="#64A4E9" />
      {/* clipPath */}
      <clipPath id="clipCircle">
        <Shard1Shape />
      </clipPath>
      <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stop-color="gold" />
          <stop offset="95%" stop-color="red" />
        </linearGradient>
      <image
        clip-path="url(#clipCircle)"
        x='15' y='250'
        height="225"
        xlinkHref={require("../assets/pokeballSplash.png")}
      />
      <image
        // clip-path="url(#clipCircle)"
        x='65' y='301.5'
        // height="358"
        xlinkHref={require("../assets/sheen14.svg")}
      />
      {/* Sheen */}
      <image
        x='160' y='15'
        height="225"
        xlinkHref={require("../assets/Sheen1.svg")}
      />
    </>
  )
}
const Shard1Shape = ({ fill }: { fill?: string }) =>
  <polygon fill={fill ?? 'rgba(255,255,25,1)'} className="cls-1" points="309.2 341.39 232.48 279.83 0 439.55 242.31 462.12 309.2 341.39" />


// const Sheen1 = () =>
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.47 225.52">
//     {/* <defs><style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;opacity:0.25;}</style></defs> */}
//     <title>Sheen 1</title>
//     <g id="Sheens">
//       <polygon className="cls-1" points="327.99 87.17 287.91 186.07 159.84 222.33 172.49 225 304.3 199.81 327.99 87.17" />
//       <polygon className="cls-1" points="167.87 0.47 0.65 67.03 23.95 124.18 23.33 111.19 11.79 69.74 167.87 0.47" />
//     </g>
//   </svg>

{/* <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stop-color="gold" />
          <stop offset="95%" stop-color="red" />
        </linearGradient> */}