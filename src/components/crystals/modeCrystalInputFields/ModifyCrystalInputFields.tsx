import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';
import ModPosition from './ModPosition';
import ModShadow from './ModShadow';
import ModColor from './ModColor';
import ModSize from './ModSize';
import ModAddChangeDelete from './ModAddChangeDelete';
import cloneDeep from 'lodash/cloneDeep';
import ModImage from './ModImage';
import ModMediaQueries from './ModMediaQueries';

function ModifyCrystalInputFields({ deleteCrystal, modMenuFixed, crystalProps, onChangeCrystalData, addSpecificCrystal }:
  { deleteCrystal, modMenuFixed, crystalProps: crystalPositionOnParallaxCanvasT, onChangeCrystalData, addSpecificCrystal }) {
  const classes = useStyles();
  const [expandedAccordions, setExpandedAccordions] = useState({
    shadow: false,
    color: false,
    position: false,
    size: false,
    image: false,
    addAndDelete: false,
    mediaQuery: false,
  })

  const toggleAccodion = (whatAccordion) => {
    setExpandedAccordions(prev => {
      const copiedExpandedAccordions = cloneDeep(expandedAccordions)
      copiedExpandedAccordions[whatAccordion] = !prev[whatAccordion]
      return copiedExpandedAccordions
    })
  }

  if (crystalProps)
    return (
      <Container className={`${classes.modeMenu} ${modMenuFixed && classes.modeMenuFixed}`}>
        <Grid container spacing={1} direction='column'>

          <ModShadow
            crystalProps={crystalProps}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />
          <ModColor
            crystalProps={crystalProps}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModPosition
            crystalProps={crystalProps}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModSize
            crystalProps={crystalProps}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModImage
            crystalProps={crystalProps}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
            />

          <ModAddChangeDelete
            deleteCrystal={deleteCrystal}
            addSpecificCrystal={addSpecificCrystal}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
            />

          <ModMediaQueries
            crystalProps={crystalProps}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />

        </Grid>
      </Container>
    )
  else return <div style={{ height: 500 }} />
}

const useStyles = makeStyles((theme) => ({
  modeMenu: {
  },
  modeMenuFixed: {
    position: 'fixed',
    right: 0,
    top: 20,
    width: 500,
    scale: .8,
  },
}));


export default ModifyCrystalInputFields
