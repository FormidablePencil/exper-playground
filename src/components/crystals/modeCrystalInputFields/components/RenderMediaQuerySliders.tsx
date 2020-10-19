import { Button, Grid, Slider, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'


const RenderMediaQuerySliders = ({ onChangeCrystalData, crystalProps }:
  { onChangeCrystalData, crystalProps }) => {

  interface sliderValues { initial, mod }
  const [sliderValues, setSliderValues] = useState<sliderValues[]>([{ initial: 0, mod: 0 }])
  const [readyToSave, setReadyToSave] = useState(false)

  const onChangeSlider = ({ newValue, key }) => {
    // console.log(newValue, key)
    setSliderValues(prev => prev.map(prevItem =>
      prevItem.initial === key ? { mod: newValue, initial: prevItem.initial } : prevItem))
  }

  const saveSliderValue = () => {
    const moddedMediaQueryValues = sliderValues.filter(item => item.initial !== item.mod && item.mod)
    onChangeCrystalData({ action: { type: 'update mediaQuery values', payload: moddedMediaQueryValues } })
    setReadyToSave(false)
  }

  const onClickCreateNewMediaQuery = (e) => {
    onChangeCrystalData({ action: { type: 'addMediaQuery' } })
    setReadyToSave(false) /* save current slider values and create new mediaQuery */
  }

  const onClickDeleteMediaQueryHandler = (mediaQueryWidth) => {
    onChangeCrystalData({ action: { type: 'removeMediaQuery', mediaQueryWidth } })
  }

  const getSliderValue = ({ mediaQueryWidth }) => {
    return sliderValues.filter(item =>
      item.initial === mediaQueryWidth)[0] ?
      sliderValues.filter(item =>
        item.initial === mediaQueryWidth)[0].mod : null
  }

  useEffect(() => {
    let sre = () => crystalProps.mediaQueries.map(mediaQuery => {
      return { initial: mediaQuery.mediaQueryWidth, mod: mediaQuery.mediaQueryWidth }
    })
    setSliderValues(sre())
  }, [crystalProps])


  // if sliderValues changed then show save btn
  useEffect(() => {
    sliderValues.map(value => {
      if (!readyToSave && value.mod !== value.initial)
        setReadyToSave(true)
      return value
    })
  }, [sliderValues])

  return (
    <>
      <Typography
        variant='h5'
        color={crystalProps.mediaQueryWidth === null ? 'secondary' : 'primary'}>
        Original
        </Typography>

      {crystalProps.mediaQueries.map(mediaQuery => {
        let currentMQApplied = false
        if (mediaQuery.mediaQueryWidth === crystalProps.mediaQueryWidth)
          currentMQApplied = true
        return (
          <Grid container direction='row' wrap='nowrap'>
            <Grid item container>
              <Slider
                color={currentMQApplied ? 'secondary' : 'primary'}
                valueLabelDisplay='on'
                min={0}
                max={2000}
                value={getSliderValue(mediaQuery)}
                onChange={(e, newValue) => onChangeSlider({
                  newValue, key: sliderValues.filter(item =>
                    item.initial === mediaQuery.mediaQueryWidth)[0].initial
                })
                }
              />
            </Grid>
            <Grid
              item
              onClick={() => onClickDeleteMediaQueryHandler(mediaQuery.mediaQueryWidth)}>
              <Button>X</Button>
            </Grid>

          </Grid>
        )
      })}

      <Button
        style={{ marginRight: 10, background: '#F4D168' }}
        variant='contained'
        onClick={onClickCreateNewMediaQuery}
      >New media query</Button>

      {readyToSave &&
        <SaveButton
          variant='contained'
          onClick={saveSliderValue}>Save</SaveButton>
      }

      {/* sliderValues check if initial !== mod and if so then render the save btn to save data */}
    </>
  )
}

const SaveButton = withStyles({
  root: {
    backgroundColor: '#FFFB48',
  }
})(Button)

export default RenderMediaQuerySliders