import { makeStyles } from '@material-ui/core';
import React from 'react'
import ParallaxGui from '../components/crystals/ParallaxGui';
import SelectCrystal from '../components/crystals/SelectCrystal';
import useParallaxProperties from '../hooks/useParallaxProperties';
import { SvgSizingWrapper } from './Crystals';
import cloneDeep from 'lodash/cloneDeep';

function CrystalParallaxEffect() {
  const classes = useStyles();

  const {
    onChangeCrystalProps, crystalProps,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
  }: {
    onChangeCrystalProps, crystalProps,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors,
    modMenuFixed, setModMenuFixed,
    addSpecificCrystal,
    deleteCrystal,
  } = useParallaxProperties()

  const RenderCrystalsDynamically = ({ setCrystalIndex }) =>
    <>
      {/* change crystalParallaxDefault to controlled: crystalProps */}
      {crystalProps.crystals.map((props, index) => {
        let modedPropsSelectedForEdit
        if (crystalIndex === index && crystalSelectionDistinction) {
          modedPropsSelectedForEdit = cloneDeep(props.crystalProps)
          modedPropsSelectedForEdit.edgesColor = selectedForModeColors.edge
          modedPropsSelectedForEdit.middleColor = selectedForModeColors.middle
        }

        return (
          <div key={index} className={classes.parallaxItem} style={{
            transform: `
            translateZ(${props.positionInParallaxCanvas.transform.translateZ}px) 
            scale(${props.positionInParallaxCanvas.transform.scale})
            `,
            ...props.positionInParallaxCanvas.xYPosition
          }}>
            <SvgSizingWrapper>
              <SelectCrystal
                onClickHandler={() => setCrystalIndex(index)}
                whatCrystal={props.shardIndex} crystalProps={modedPropsSelectedForEdit ?? props.crystalProps} />
            </SvgSizingWrapper>
          </div>
        )
      }
      )}
    </>

const parallaxCanvasHeight = '100vh'

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.parallaxContainer}>
          <div style={{ height: parallaxCanvasHeight }} />
          <RenderCrystalsDynamically setCrystalIndex={setCrystalIndex} />

        </div>
      </div>

      <ParallaxGui
        deleteCrystal={deleteCrystal}
        addSpecificCrystal={addSpecificCrystal}
        modMenuFixed={modMenuFixed} setModMenuFixed={setModMenuFixed}
        selectedForModeColors={selectedForModeColors} setSelectedForModeColors={setSelectedForModeColors}
        crystalSelectionDistinction={crystalSelectionDistinction} setCrystalSelectionDistinction={setCrystalSelectionDistinction}
        crystalIndex={crystalIndex} setCrystalIndex={setCrystalIndex}
        crystalProps={crystalProps} onChangeCrystalProps={onChangeCrystalProps}
      />

    </div>
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
  parallaxItem: {
    position: "absolute",
  },
}));

export default CrystalParallaxEffect