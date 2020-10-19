import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';

function ModImage({ onChangeCrystalData, expandedAccordions, toggleAccodion, crystalProps }:
  { onChangeCrystalData, expandedAccordions, toggleAccodion, crystalProps: crystalPositionOnParallaxCanvasT }) {
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
                onChange={(e) => onChangeCrystalData('image', e)}
                value={crystalProps.crystalProps.imageProps.image}
                label='image' />
            </Grid>
            <TextField
              onChange={(e) => onChangeCrystalData('imageX', e)}
              value={crystalProps.crystalProps.imageProps.x}
              label='x' />
            <TextField
              onChange={(e) => onChangeCrystalData('imageY', e)}
              value={crystalProps.crystalProps.imageProps.y}
              label='y' />
            <TextField
              onChange={(e) => onChangeCrystalData('imageWidth', e)}
              value={crystalProps.crystalProps.imageProps.width}
              label='width' />
            <TextField
              onChange={(e) => onChangeCrystalData('imageHeight', e)}
              value={crystalProps.crystalProps.imageProps.height}
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
