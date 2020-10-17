import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';
import ModPosition from './ModPosition';
import ModShadow from './ModShadow';
import ModColor from './ModColor';
import ModSize from './ModSize';
import ModAddAndDelete from './ModAddAndDelete';
import cloneDeep from 'lodash/cloneDeep';
import ModImage from './ModImage';

function ModifyCrystalInputFields({ deleteCrystal, modMenuFixed, crystalData, onChangeCrystalData, addSpecificCrystal }:
  { deleteCrystal, modMenuFixed, crystalData: crystalPositionOnParallaxCanvasT, onChangeCrystalData, addSpecificCrystal }) {
  const classes = useStyles();
  const [expandedAccordions, setExpandedAccordions] = useState({
    shadow: false,
    color: false,
    position: false,
    size: false,
    image: false,
    addAndDelete: false,
  })

  const toggleAccodion = (whatAccordion) => {
    setExpandedAccordions(prev => {
      const copiedExpandedAccordions = cloneDeep(expandedAccordions)
      copiedExpandedAccordions[whatAccordion] = !prev[whatAccordion]
      return copiedExpandedAccordions
    })
  }

  if (crystalData)
    return (
      <Container className={`${classes.modeMenu} ${modMenuFixed && classes.modeMenuFixed}`}>
        <Grid container spacing={1} direction='column'>

          <ModShadow
            crystalData={crystalData}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />
          <ModColor
            crystalData={crystalData}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModPosition
            onChangeCrystalData={onChangeCrystalData}
            crystalData={crystalData}
            expandedAccordions={expandedAccordions}
            toggleAccodion={toggleAccodion}
          />

          <ModSize
            crystalData={crystalData}
            expandedAccordions={expandedAccordions}
            onChangeCrystalData={onChangeCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModImage
            onChangeCrystalData={onChangeCrystalData}
            expandedAccordions={expandedAccordions}
            toggleAccodion={toggleAccodion}
            crystalData={crystalData}
          />

          <ModAddAndDelete
            deleteCrystal={deleteCrystal}
            addSpecificCrystal={addSpecificCrystal}
            expandedAccordions={expandedAccordions}
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
    top: 50,
    width: 500,
    scale: .8,
  },
}));


export default ModifyCrystalInputFields
