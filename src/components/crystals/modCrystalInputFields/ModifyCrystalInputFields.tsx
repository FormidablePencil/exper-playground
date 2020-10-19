import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';
import ModPosition from './ModPosition';
import ModShadow from './ModShadow';
import ModColor from './ModColor';
import ModTransform from './ModTransform';
import ModAddChangeDelete from './ModAddChangeDelete';
import ModImage from './ModImage';
import ModMediaQueries from './ModMediaQueries';

function ModifyCrystalInputFields({ deleteCrystal, modMenuFixed, selectedCrystalProps, dispatchCrystalData, addSpecificCrystal }:
  { deleteCrystal, modMenuFixed, selectedCrystalProps: crystalPositionOnParallaxCanvasT, dispatchCrystalData, addSpecificCrystal }) {
  const classes = useStyles();
  const defaultExpandedAccordions = {
    shadow: false,
    color: false,
    position: false,
    size: false,
    image: false,
    addAndDelete: false,
    mediaQuery: false,
  }
  const [expandedAccordions, setExpandedAccordions] = useState(defaultExpandedAccordions)

  const toggleAccodion = (whatAccordion) =>
    setExpandedAccordions(prev => { return { ...defaultExpandedAccordions, [whatAccordion]: !prev[whatAccordion] } })

  if (selectedCrystalProps)
    return (
      <div className={`${classes.modeMenu} ${modMenuFixed && classes.modeMenuFixed}`} style={{}}>
        <Grid container spacing={1} direction='column'>

          <ModAddChangeDelete
            deleteCrystal={deleteCrystal}
            addSpecificCrystal={addSpecificCrystal}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModShadow
            selectedCrystalProps={selectedCrystalProps}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModColor
            selectedCrystalProps={selectedCrystalProps}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModPosition
            selectedCrystalProps={selectedCrystalProps}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModTransform
            selectedCrystalProps={selectedCrystalProps}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModImage
            selectedCrystalProps={selectedCrystalProps}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

          <ModMediaQueries
            selectedCrystalProps={selectedCrystalProps}
            expandedAccordions={expandedAccordions}
            dispatchCrystalData={dispatchCrystalData}
            toggleAccodion={toggleAccodion}
          />

        </Grid>
      </div>
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
    transform: 'scale(.8)',
  },
}));


export default ModifyCrystalInputFields
