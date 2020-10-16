import { makeStyles } from '@material-ui/core';
import React from 'react'
import ParallaxGui from '../components/crystals/ParallaxGui';
import { SelectCrystal } from '../constants/crystalParallax';
import useParallaxProperties from '../hooks/useParallaxProperties';
import { SvgSizingWrapper } from './Crystals';

function CrystalParallaxEffect() {
  const classes = useStyles();

  const { onChangeCrystalProps, crystalProps, setCrystalProps,
    crystalIndex, setCrystalIndex,
    crystalSelectionDistinction, setCrystalSelectionDistinction,
    selectedForModeColors, setSelectedForModeColors
  } = useParallaxProperties()

  const RenderCrystalsDynamically = ({ setCrystalIndex }) =>
    <>
      {/* change crystalParallaxDefault to controlled: crystalProps */}
      {crystalProps.crystals.map((props, index) => {
        let modedPropsSelectedForEdit
        if (crystalIndex === index && crystalSelectionDistinction) {
          modedPropsSelectedForEdit = { ...props.componentProps }
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
                whatCrystal={index} componentProps={modedPropsSelectedForEdit ?? props.componentProps} />
            </SvgSizingWrapper>
          </div>
        )
      }
      )}
    </>

  return (
    <div className="pageContainer">
      <div className={classes.container}>
        <div className={classes.parallaxContainer}>
          <div
            className={classes.parallaxItem}
            style={{
              width: '100%',
              transform: 'translateZ(0px) scale(1)',
              height: '840px',
            }} />

          <RenderCrystalsDynamically setCrystalIndex={setCrystalIndex} />

        </div>
      </div>

      <ParallaxGui
        setSelectedForModeColors={setSelectedForModeColors}
        selectedForModeColors={selectedForModeColors}
        crystalSelectionDistinction={crystalSelectionDistinction}
        setCrystalSelectionDistinction={setCrystalSelectionDistinction}
        setCrystalIndex={setCrystalIndex}
        crystalIndex={crystalIndex}
        onChangeCrystalProps={onChangeCrystalProps}
        crystalProps={crystalProps}
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