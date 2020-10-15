import { makeStyles } from '@material-ui/core';
import React from 'react'
import crystalParallax from '../constants/crystalParallax';
import { SvgSizingWrapper } from './Crystals';

function CrystalParallaxEffect() {
  const classes = useStyles();

  const RenderCrystalsDynamically = () =>
    <>
      {crystalParallax.crystals.map(item => {
        if (item.component)
          return <div className={classes.parallaxItem} style={item.styles}>
            <SvgSizingWrapper>{item.component}</SvgSizingWrapper>
          </div>
        else
          return (
            <img
              className={classes.parallaxItem}
              style={item.styles}
              src={item.image}
              alt={item.alt}
            />
          )
      })}
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

// {/* add before mask: <filter id="f1" x="0" y="0" width="200%" height="200%">
// <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
// <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
// <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
// </filter>

// add filter="url(#f1)" in class="cls-4" */}