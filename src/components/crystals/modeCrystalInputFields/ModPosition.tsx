import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'

function ModPosition({ onChangeCrystalProps, expandedAccordions, toggleAccodion, crystalProps }) {
  return (
    <Grid item container>
      <Accordion
        expanded={expandedAccordions.position}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('position')}>
          <Grid item container alignItems='baseline'>
            <Typography variant='h5'>Position</Typography>
            <Typography variant='body1' style={{ color: '#D0D0D0', marginLeft: 5 }}>append px or em at the end for top, bottom, left and right</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          {crystalProps.positionInParallaxCanvas.xYPosition &&
            <>
              <TextField onChange={(e) => onChangeCrystalProps('top', e)} value={crystalProps.positionInParallaxCanvas.xYPosition.top} label='top' />
              <TextField onChange={(e) => onChangeCrystalProps('bottom', e)} value={crystalProps.positionInParallaxCanvas.xYPosition.bottom} label='bottom' />
              <TextField onChange={(e) => onChangeCrystalProps('left', e)} value={crystalProps.positionInParallaxCanvas.xYPosition.left} label='left' />
              <TextField onChange={(e) => onChangeCrystalProps('right', e)} value={crystalProps.positionInParallaxCanvas.xYPosition.right} label='right' />
            </>
          }
          <TextField onChange={(e) => onChangeCrystalProps('translateZ', e)} value={crystalProps.positionInParallaxCanvas.transform.translateZ} label='depth (translateZ)' />
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ModPosition
