import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';
import ModPosition from './ModPosition';
import ModShadow from './ModShadow';
import ModColor from './ModColor';
import ModSize from './ModSize';
import ModAddAndDelete from './ModAddAndDelete';
import cloneDeep from 'lodash/cloneDeep';

function ModifyCrystalInputFields({ deleteCrystal, modMenuFixed, crystalProps, onChangeCrystalProps, addSpecificCrystal }:
  { deleteCrystal, modMenuFixed, crystalProps: crystalPositionOnParallaxCanvasT, onChangeCrystalProps, addSpecificCrystal }) {
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

if (crystalProps)
  return (
    <Container className={`${classes.modeMenu} ${modMenuFixed && classes.modeMenuFixed}`}>
      <Grid container spacing={1} direction='column'>

        <ModShadow
          crystalProps={crystalProps}
          expandedAccordions={expandedAccordions}
          onChangeCrystalProps={onChangeCrystalProps}
          toggleAccodion={toggleAccodion}
        />
        <ModColor
          crystalProps={crystalProps}
          expandedAccordions={expandedAccordions}
          onChangeCrystalProps={onChangeCrystalProps}
          toggleAccodion={toggleAccodion}
        />

        <ModPosition
          onChangeCrystalProps={onChangeCrystalProps}
          crystalProps={crystalProps}
          expandedAccordions={expandedAccordions}
          // onChangeCrystalProps={onChangeCrystalProps}
          toggleAccodion={toggleAccodion}
        />

        <ModSize
          crystalProps={crystalProps}
          expandedAccordions={expandedAccordions}
          onChangeCrystalProps={onChangeCrystalProps}
          toggleAccodion={toggleAccodion}
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
