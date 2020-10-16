import { makeStyles } from '@material-ui/core';
import React from 'react'
import crystalParallax from '../constants/crystalParallax';
import { SvgSizingWrapper } from './Crystals';

function CrystalParallaxEffect() {
  const classes = useStyles();

  const RenderCrystalsDynamically = () =>
    <>
      {crystalParallax.crystals.map((props, index) =>
        <div key={index} className={classes.parallaxItem} style={props.positionInParallaxCanvas}>
          <SvgSizingWrapper>{props.component}</SvgSizingWrapper>
        </div>
      )}
    </>

  return (
    <div className={classes.container}>
      <div className={classes.parallaxContainer}>
        <div
          className={classes.parallaxItem}
          style={{
            width: '100%',
            transform: 'translateZ(0px) scale(1)',
            height: '840px',
          }} />

        <RenderCrystalsDynamically />

      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: 'aquamarine',
    height: '55vh',
    width: '100%',
  },
  parallaxContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    perspective: '8px',
    perspectiveOrigin: '0%',
  },
  parallaxItem: {
    position: "absolute",
  }
}));

export default CrystalParallaxEffect