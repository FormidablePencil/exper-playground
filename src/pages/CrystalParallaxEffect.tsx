import { makeStyles } from '@material-ui/core';
import React, { createContext } from 'react'
import ParallaxGui from '../components/crystals/ParallaxGui';
import SelectCrystal from '../components/crystals/SelectCrystal';
import useParallaxProperties, { useParallaxPropertiesT } from '../hooks/useParallaxProperties';
import { SvgSizingWrapper } from './Crystals';
import cloneDeep from 'lodash/cloneDeep';
import RenderCrystalsDynamically from '../components/crystals/RenderCrystalsDynamically';
import { crystalParallaxT } from '../constants/crystalParallax';

export const WindowWidthContext = createContext({ windowWidth: 0 })
export const CrystalDataContext = createContext<any>({ crystalData: {} })

function CrystalParallaxEffect() {
  const classes = useStyles();

  const {
    onChangeCrystalData, crystalData,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
    windowWidth,
  }: useParallaxPropertiesT = useParallaxProperties()

  const parallaxCanvasHeight = '100vh'

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      <CrystalDataContext.Provider value={{ crystalData }}>
        <div>
          <div className={classes.container}>
            <div className={classes.parallaxContainer}>
              <div style={{ height: parallaxCanvasHeight }} />
              <RenderCrystalsDynamically
                selectedForModeColors={selectedForModeColors}
                crystalIndex={crystalIndex}
                crystalSelectionDistinction={crystalSelectionDistinction}
                crystalData={crystalData}
                setCrystalIndex={setCrystalIndex} />
            </div>

          </div>
          <ParallaxGui
            deleteCrystal={deleteCrystal}
            addSpecificCrystal={addSpecificCrystal}
            modMenuFixed={modMenuFixed} setModMenuFixed={setModMenuFixed}
            selectedForModeColors={selectedForModeColors} setSelectedForModeColors={setSelectedForModeColors}
            crystalSelectionDistinction={crystalSelectionDistinction} setCrystalSelectionDistinction={setCrystalSelectionDistinction}
            crystalIndex={crystalIndex} setCrystalIndex={setCrystalIndex}
            crystalData={crystalData} onChangeCrystalData={onChangeCrystalData}
          />
        </div>
      </CrystalDataContext.Provider>
    </WindowWidthContext.Provider>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'aquamarine',
    height: '100vh',
    width: '100%',
  },
  parallaxContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    perspective: '8px',
    perspectiveOrigin: '0%',
  },
}));

export default CrystalParallaxEffect