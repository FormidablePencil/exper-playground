import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModSize({ dispatchCrystalData, expandedAccordions, toggleAccodion, selectedCrystalProps }) {
  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.size}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('size')}>

          <Typography variant='h5'>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField onChange={(e) => dispatchCrystalData('scale', e)} value={selectedCrystalProps.positionInParallaxCanvas.transform.scale} label='scale' />
        </AccordionDetails>

      </Accordion>
    </Grid>

  )
}

export default ModSize
