import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { crystalPositionOnParallaxCanvasT } from '../../constants/crystalParallax';

function ModifyCrystalInputFields({ crystalProps, onChangeCrystalProps }:
  { crystalProps: crystalPositionOnParallaxCanvasT, onChangeCrystalProps }) {
  const classes = useStyles();

  if (crystalProps)
    return (
      <Container className={classes.container}>
        <Grid container spacing={3} direction='column'>

          <Grid item>
            <Typography variant='h5'>Shadow</Typography>
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.componentProps.feColorMatrixDx} label='dx' />
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.componentProps.feColorMatrixDy} label='dy' />
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.componentProps.feColorMatrixStdDeviation} label='stdDeviation' />
          </Grid>

          <Grid item>
            <Typography variant='h5'>Color</Typography>
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.componentProps.feColorMatrixBackdropColor} label='backdropColor' />
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.componentProps.edgesColor} label='edgesColor' />
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.componentProps.middleColor} label='middleColor' />
          </Grid>

          <Typography variant='h5'>Position</Typography>
          <Grid item container>
            {crystalProps.positionInParallaxCanvas.xYPosition.top ||
              crystalProps.positionInParallaxCanvas.xYPosition.top === 0 ?
              <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.positionInParallaxCanvas.xYPosition.top} label='top' />
              : <Button color='primary'>top</Button>
            }
            {crystalProps.positionInParallaxCanvas.xYPosition.bottom ||
              crystalProps.positionInParallaxCanvas.xYPosition.bottom === 0 ?
              <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.positionInParallaxCanvas.xYPosition.bottom} label='bottom' />
              : <Button color='primary'>bottom</Button>
            }
            {crystalProps.positionInParallaxCanvas.xYPosition.left ||
              crystalProps.positionInParallaxCanvas.xYPosition.left === 0 ?
              <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.positionInParallaxCanvas.xYPosition.left} label='left' />
              : <Button color='primary'>left</Button>
            }
            {crystalProps.positionInParallaxCanvas.xYPosition.right ||
              crystalProps.positionInParallaxCanvas.xYPosition.right === 0 ?
              <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.positionInParallaxCanvas.xYPosition.right} label='right' />
              : <Button color='primary'>right</Button>
            }
          </Grid>

          <Grid item>
            <Typography variant='h5'>Size</Typography>
            <TextField onChange={() => onChangeCrystalProps('c')} value={crystalProps.positionInParallaxCanvas.transform.scale} label='scale' />
          </Grid>

        </Grid>
      </Container>
    )
  else return <div style={{ height: 500 }} />
}

const useStyles = makeStyles((theme) => ({
  container: {
    borderTop: '1px solid #989898',
    height: 500
  }
}));


export default ModifyCrystalInputFields
