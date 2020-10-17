import { Accordion, AccordionDetails, AccordionSummary, Grid, TextField, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../../constants/crystalParallax';

function ModPosition({ onChangeCrystalData, expandedAccordions, toggleAccodion, crystalData
}: { onChangeCrystalData, expandedAccordions, toggleAccodion, crystalData: crystalPositionOnParallaxCanvasT }) {
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
          {crystalData.positionInParallaxCanvas.xYPosition &&
            <>
              <TextField onChange={(e) => onChangeCrystalData('top', e)} value={crystalData.positionInParallaxCanvas.xYPosition.top} label='top' />
              <TextField onChange={(e) => onChangeCrystalData('bottom', e)} value={crystalData.positionInParallaxCanvas.xYPosition.bottom} label='bottom' />
              <TextField onChange={(e) => onChangeCrystalData('left', e)} value={crystalData.positionInParallaxCanvas.xYPosition.left} label='left' />
              <TextField onChange={(e) => onChangeCrystalData('right', e)} value={crystalData.positionInParallaxCanvas.xYPosition.right} label='right' />
              <TextField onChange={(e) => onChangeCrystalData('zIndex', e)} value={crystalData.zIndex} label='zIndex' />
            </>
          }
          <TextField onChange={(e) => onChangeCrystalData('translateZ', e)} value={crystalData.positionInParallaxCanvas.transform.translateZ} label='depth (translateZ)' />
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ModPosition
