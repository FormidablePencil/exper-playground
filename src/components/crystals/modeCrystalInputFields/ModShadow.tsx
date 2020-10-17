import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModShadow({ onChangeCrystalProps, expandedAccordions, toggleAccodion, crystalProps }) {
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
          <TextField onChange={(e) => onChangeCrystalProps('feColorMatrixDx', e)} value={crystalProps.crystalProps.feColorMatrixDx} label='dx' />
          <TextField onChange={(e) => onChangeCrystalProps('feColorMatrixDy', e)} value={crystalProps.crystalProps.feColorMatrixDy} label='dy' />
          <TextField onChange={(e) => onChangeCrystalProps('stdDeviation', e)} value={crystalProps.crystalProps.feColorMatrixStdDeviation} label='stdDeviation' />
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ModShadow
