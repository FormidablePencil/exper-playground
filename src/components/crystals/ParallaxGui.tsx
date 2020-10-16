import { Grid, makeStyles, Switch, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { crystalParallaxT } from '../../constants/crystalParallax';
import ModifyCrystalInputFields from './ModifyCrystalInputFields';
import { selectedForModeColorsT } from '../../hooks/useParallaxProperties';

/* //~ feature to allow one to mess with the parallax effect */
/* //* Later on, copy code into cms and POST req to db upon clicking save */

function ParallaxGui({
  crystalIndex, setCrystalIndex,
  onChangeCrystalProps, crystalProps,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  setSelectedForModeColors,
  selectedForModeColors
}: {
  crystalIndex, setCrystalIndex,
  onChangeCrystalProps, crystalProps?: crystalParallaxT,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  setSelectedForModeColors,
  selectedForModeColors
}) {
  const classes = useStyles();

  // feColorMatrixDx
  // feColorMatrixDy
  // feColorMatrixStdDeviation
  // feColorMatrixBackdropColor
  // edgesColor
  // middleColor
  //* image

  // transform: translateZ(1px)
  // transform: scale(1)
  // top, bottom, left, right 

  return (
    <>
      <ToggleCrystalSelectionDistictionBtn
        selectedForModeColors={selectedForModeColors}
        setSelectedForModeColors={setSelectedForModeColors}
        crystalSelectionDistinction={crystalSelectionDistinction}
        setCrystalSelectionDistinction={setCrystalSelectionDistinction}
      />
      <Grid container>
        <Grid item>
          <Typography variant='h4'>Image:</Typography>
        </Grid>
        <Grid item>
          <input
            onChange={(e: any) => setCrystalIndex(e.target.value - 1)}
            value={crystalIndex + 1}
            className={classes.imageSelectedToMode} />
        </Grid>
      </Grid>
      {/* //* click on crystal to modify it's properties */}
      <ModifyCrystalInputFields
        crystalProps={crystalProps.crystals[crystalIndex]}
        onChangeCrystalProps={onChangeCrystalProps}
      />
    </>
  )
}

const ToggleCrystalSelectionDistictionBtn = ({
  setSelectedForModeColors, selectedForModeColors,
  crystalSelectionDistinction, setCrystalSelectionDistinction }: {
    setSelectedForModeColors, selectedForModeColors: selectedForModeColorsT,
    crystalSelectionDistinction, setCrystalSelectionDistinction
  }) => {
  const classes = useStyles();

  const onChangeEdgeColor = (e) =>
    setSelectedForModeColors({ edge: e.target.value, middle: selectedForModeColors.middle })
  const onChangeMiddleColor = (e) =>
    setSelectedForModeColors({ edge: selectedForModeColors.edge, middle: e.target.value })

  return (
    <div className={classes.toggleSliderSection}>
      <Typography variant='body1'>Toggle selected crystal distinct</Typography>
      <Switch
        checked={crystalSelectionDistinction}
        onChange={() => setCrystalSelectionDistinction(prev => !prev)}
        name="Crystal Distinct"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <TextField onChange={onChangeEdgeColor} value={selectedForModeColors.edge} label='edges' />
      <TextField onChange={onChangeMiddleColor} value={selectedForModeColors.middle} label='base' />
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  toggleSliderSection: {
    borderBottom: '1px solid #A3A3A3',
  },
  imageSelectedToMode: {
    height: 30, width: 35, fontSize: 24
  }
}));


export default ParallaxGui
