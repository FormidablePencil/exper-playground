import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModImage({ onChangeCrystalProps, expandedAccordions, toggleAccodion, crystalProps }) {
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
          <TextField
            className={classes.imageTextField}
            onChange={(e) => onChangeCrystalProps('image', e)}
            value={crystalProps.crystalProps.image}
            label='image' />
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
