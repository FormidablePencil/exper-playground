import React from 'react'
import Crystal1 from '../components/crystals/Crystal1'
import Crystal10 from '../components/crystals/Crystal10'
import Crystal11 from '../components/crystals/Crystal11'
import Crystal12 from '../components/crystals/Crystal12'
import Crystal13 from '../components/crystals/Crystal13'
import Crystal2 from '../components/crystals/Crystal2'
import Crystal3 from '../components/crystals/Crystal3'
import Crystal4 from '../components/crystals/Crystal4'
import Crystal5 from '../components/crystals/Crystal5'
import Crystal6 from '../components/crystals/Crystal6'
import Crystal7 from '../components/crystals/Crystal7'
import Crystal8 from '../components/crystals/Crystal8'
import Crystal9 from '../components/crystals/Crystal9'
import SvgAndImageClipPathReference from '../components/ImgBtSvg/SvgAndImageClipPathReference'
//~ create css module for styling,
//~ leave the rest to one css that'll gover the rest of the styles of the crystals

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
      <SvgSizingWrapper>
        <Crystal1
          image={require("../assets/pokeballSplash.png")}
          edgesColor={'#79E969'}
          middleColor={'#E9E642'}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal2
          edgesColor={'#79E969'}
          middleColor={'#E9E642'}
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal3
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal4
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal5
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal6
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal7
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal8
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal9
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal10
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal11
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal12
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
      <SvgSizingWrapper>
        <Crystal13
          image={require("../assets/pokeballSplash.png")}
        />
      </SvgSizingWrapper>
    </div>
  )
}

export default Crystals
