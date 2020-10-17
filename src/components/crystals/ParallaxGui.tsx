import { Grid, makeStyles, Switch, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { crystalParallaxT } from '../../constants/crystalParallax';
import ModifyCrystalInputFields from './modeCrystalInputFields/ModifyCrystalInputFields';
import { selectedForModeColorsT } from '../../hooks/useParallaxProperties';
import ToggleModMenu from './ToggleModMenu';

function ParallaxGui({
  deleteCrystal,
  addSpecificCrystal,
  crystalIndex, setCrystalIndex,
  onChangeCrystalData, crystalData,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  setSelectedForModeColors,
  selectedForModeColors,
  modMenuFixed, setModMenuFixed
}: {
  deleteCrystal,
  addSpecificCrystal,
  crystalIndex, setCrystalIndex,
  onChangeCrystalData, crystalData?: crystalParallaxT,
  crystalSelectionDistinction, setCrystalSelectionDistinction,
  setSelectedForModeColors,
  selectedForModeColors,
  modMenuFixed, setModMenuFixed
}) {
  const classes = useStyles();

  const onChangeCrystalIndex = (e: any) => {
    let int
    int = parseInt(e.target.value)
    if (e.target.value.length === 0)
      return setCrystalIndex('')
    else if (parseInt(e.target.value) === 1 && e.target.value !== '1')
      int = null

    if (int) setCrystalIndex(e.target.value - 1)
  }

  return (
    <div style={{ background: '#F8F8F8' }}>
      <ToggleCrystalSelectionDistictionBtn
        selectedForModeColors={selectedForModeColors}
        setSelectedForModeColors={setSelectedForModeColors}
        crystalSelectionDistinction={crystalSelectionDistinction}
        setCrystalSelectionDistinction={setCrystalSelectionDistinction}
      />
      <ToggleModMenu
        modMenuFixed={modMenuFixed}
        setModMenuFixed={setModMenuFixed}
      />

      <Grid container className={classes.imageIndex}>
        <Grid item className={classes.imageIndexText}>
          <Typography variant='h4'>Component:</Typography>
        </Grid>
        <Grid item>
          <input
            onChange={onChangeCrystalIndex}
            value={typeof crystalIndex !== 'number' ? crystalIndex : crystalIndex + 1}
            className={classes.imageSelectedToMode} />
        </Grid>
      </Grid>

      <ModifyCrystalInputFields
        deleteCrystal={deleteCrystal}
        addSpecificCrystal={addSpecificCrystal}
        modMenuFixed={modMenuFixed}
        crystalData={crystalData.crystals[crystalIndex]}
        onChangeCrystalData={onChangeCrystalData}
      />

    </div>
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
    height: 30, width: 35, fontSize: 24,
  },
  imageIndex: {
    background: 'white',
    position: 'fixed',
    right: 0,
    top: 0,
    width: 270,
    borderRadius: '2em 0 0 2em',
    scale: .8,
  },
  imageIndexText: {
    marginLeft: 30,
  }
}));


export default ParallaxGui
