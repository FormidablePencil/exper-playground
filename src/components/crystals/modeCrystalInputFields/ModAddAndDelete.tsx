import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { mapOverTotalOfCrystals } from '../../../helpers/mapOverTotalOfCrystals';
import SelectCrystal from '../SelectCrystal';

function ModAddAndDelete({ deleteCrystal, expandedAccordions, toggleAccodion, addSpecificCrystal }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Accordion
        expanded={expandedAccordions.addAndDelete}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => toggleAccodion('addAndDelete')}>
          <Typography variant='h5'>And & delete</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction='column'>

            <Grid container>
              <Grid item>
                <Button
                  onClick={deleteCrystal}
                  className={classes.delete}>Delete component</Button>
              </Grid>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  Add Component
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container direction='row' className={classes.crystalSelectionContainer}>
                    {mapOverTotalOfCrystals().map((item, index) =>
                      <Grid item key={index}>
                        <Button
                          onClick={() => addSpecificCrystal(index)}
                          className={classes.crystalBtn}
                          key={index}>Crystal {index + 1}
                          <div style={{ height: 75, width: 75 }}>
                            <SelectCrystal whatCrystal={index} />
                          </div>
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>

          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}


const useStyles = makeStyles((theme) => ({
  delete: {
    color: '#F87070'
  },
  add: {
    color: '#498B31'
  },
  crystalBtn: {
    width: '100%'
  },
  crystalSelectionContainer: {
    height: 200,
    overflowY: 'scroll'
  }
}));

export default ModAddAndDelete
