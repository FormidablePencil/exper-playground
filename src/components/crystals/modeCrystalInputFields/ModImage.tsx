import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';

function ModImage({ dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps }:
  { dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps: crystalPositionOnParallaxCanvasT }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.image}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('image')}>

          <Typography variant='h5'>Image</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction='row'>
            <Grid item container>
              <TextField
                className={classes.imageTextField}
                onChange={(e) => dispatchCrystalData('image', e)}
                value={selectedCrystalProps.crystalProps.imageProps.image}
                label='image' />
            </Grid>
            <TextField
              onChange={(e) => dispatchCrystalData('imageX', e)}
              value={selectedCrystalProps.crystalProps.imageProps.x}
              label='x' />
            <TextField
              onChange={(e) => dispatchCrystalData('imageY', e)}
              value={selectedCrystalProps.crystalProps.imageProps.y}
              label='y' />
            <TextField
              onChange={(e) => dispatchCrystalData('imageWidth', e)}
              value={selectedCrystalProps.crystalProps.imageProps.width}
              label='width' />
            <TextField
              onChange={(e) => dispatchCrystalData('imageHeight', e)}
              value={selectedCrystalProps.crystalProps.imageProps.height}
              label='height' />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  imageTextField: {
    width: 250
  }
}));

export default ModImage
