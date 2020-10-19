import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModColor({onChangeCrystalData, expandedAccordions, toggleAccodion, crystalProps}) {
  return (
    
    <Grid item>
    <Accordion
      expanded={expandedAccordions.color}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={() => toggleAccodion('color')}>
        <Typography variant='h5'>Color</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <a href='http://andresgalante.com/RGBAtoFeColorMatrix/'>converting color to special format for backdropColor</a>
        </Typography>
        <TextField onChange={(e) => onChangeCrystalData('edgesColor', e)} value={crystalProps.crystalProps.edgesColor} label='edgesColor' />
        <TextField onChange={(e) => onChangeCrystalData('middleColor', e)} value={crystalProps.crystalProps.middleColor} label='middleColor' />
        <TextField onChange={(e) => onChangeCrystalData('feColorMatrixBackdropColor', e)} value={crystalProps.crystalProps.feColorMatrixBackdropColor} label='backdropColor' />
      </AccordionDetails>
    </Accordion>
  </Grid>

  )
}

export default ModColor
