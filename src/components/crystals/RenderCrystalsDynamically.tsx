import React from 'react'
import cloneDeep from 'lodash/cloneDeep';
import { makeStyles } from '@material-ui/core';
import { SvgSizingWrapper } from '../../pages/Crystals';
import SelectCrystal from './SelectCrystal';


const RenderCrystalsDynamically = ({
  setCrystalIndex,
  selectedForModeColors,
  crystalIndex,
  crystalSelectionDistinction,
  crystalData
}) => {
  const classes = useStyles();
  return (
    <>
      {/* change crystalParallaxDefault to controlled: crystalData */}
      {crystalData.crystals.map((props, index) => {
        let modedPropsSelectedForEdit
        if (crystalIndex === index && crystalSelectionDistinction) {
          modedPropsSelectedForEdit = cloneDeep(props.crystalProps)
          modedPropsSelectedForEdit.edgesColor = selectedForModeColors.edge
          modedPropsSelectedForEdit.middleColor = selectedForModeColors.middle
        }

        return (
          <div key={index} className={classes.parallaxItem} style={{
            zIndex: props.zIndex,
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
  )
}


const useStyles = makeStyles((theme) => ({
  parallaxItem: {
    position: "absolute",
  },
}));

export default RenderCrystalsDynamically