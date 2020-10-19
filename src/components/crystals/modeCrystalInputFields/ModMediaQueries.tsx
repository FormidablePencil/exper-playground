import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext } from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';
import { WindowWidthContext } from '../../../pages/CrystalParallaxEffect';
import RenderMediaQuerySliders from './components/RenderMediaQuerySliders';

function ModMediaQueries({ onChangeCrystalData, crystalProps, expandedAccordions, toggleAccodion }:
  { onChangeCrystalData, crystalProps: crystalPositionOnParallaxCanvasT, expandedAccordions, toggleAccodion }) {

  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.mediaQuery}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('mediaQuery')}>
          <Grid container alignItems='baseline'>
            <Typography variant='h5'>Media Queries</Typography>
            <CurrentScreenWidth />
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>

            <RenderMediaQuerySliders
              onChangeCrystalData={onChangeCrystalData}
              crystalProps={crystalProps} />

          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

const CurrentScreenWidth = () => {
  const { windowWidth } = useContext(WindowWidthContext)
  const classes = useStyles();
  return (
    <Typography className={classes.windowWidth}>screen width: {windowWidth}</Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  windowWidth: {
    marginLeft: '1em'
  }
}));

export default ModMediaQueries
