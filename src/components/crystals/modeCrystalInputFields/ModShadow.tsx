import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModShadow({ onChangeCrystalData, expandedAccordions, toggleAccodion, crystalData }) {
  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.shadow}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('shadow')}
        >
          <Typography variant='h5'>Shadow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField onChange={(e) => onChangeCrystalData('feColorMatrixDx', e)} value={crystalData.crystalProps.feColorMatrixDx} label='dx' />
          <TextField onChange={(e) => onChangeCrystalData('feColorMatrixDy', e)} value={crystalData.crystalProps.feColorMatrixDy} label='dy' />
          <TextField onChange={(e) => onChangeCrystalData('stdDeviation', e)} value={crystalData.crystalProps.feColorMatrixStdDeviation} label='stdDeviation' />
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ModShadow
