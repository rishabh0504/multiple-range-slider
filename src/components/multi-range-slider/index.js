import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles({
  sliderContainer: {
    width: '100%'
  },
  fullWidth: {
    width: '100%'
  },
  slider: {
    WebkitAppearance: 'none',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    outline: 'none',
    opacity: '0.99',
    WebkitTransition: '0.2s',
    transition: 'opacity 0.2s',
    pointerEvents: 'none',
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      appearance: 'none',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      border: '1px solid  #1a77d2',
      background: 'white',
      cursor: 'pointer',
      pointerEvents: 'all',
      opacity: '1'
    },
    '&::-moz-range-thumb': {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      border: '1px solid  #1a77d2',
      background: 'white',
      cursor: 'pointer',
      pointerEvents: 'all',
      opacity: '1'
    }
  },
  rangeTrackWrapper: {
    width: '100%',
    display: 'flex',
    borderRadius: '15px',
    height: '10px',
    backgroundColor: 'transparent'
  },
  endRangeWrapper: {
    padding: '0px',
    marginTop: '-24px !important'
  },
  startRangeWrapper: {
    padding: '0px'
  },
  rangeStartTrack: {
    height: '8px',
    marginTop: '-8px',
    borderRadius: '4px'
  },
  rangeMidTrack: {
    height: '8px',
    marginTop: '-8px',
    borderRadius: '4px'
  },
  rangeEndTrack: {
    height: '8px',
    marginTop: '-8px',
    borderRadius: '4px'
  },
  rangeSlider: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 'xx-small',
    borderRadius: '15px'
  },
  rangeEnd: {
    zIndex: 100000
  },
  rangeStart: {
    zIndex: 10001
  },
  rangeSliderActive: {
    backgroundColor: '#1a77d2'
  },
  rangeSliderInactive: {
    backgroundColor: '#d7d7d7'
  },
  lable: {
    fontSize: '14px',
    color: '#7b7b7b',
    marginBottom: '0px'
  },
  dataList: {
    fontSize: '10px'
  }
});

const listItems = [
  {
    label: '0%',
    value: 0
  },
  {
    label: '10%',
    value: 10
  },
  {
    label: '20%',
    value: 20
  },
  {
    label: '30%',
    value: 30
  },
  {
    label: '40%',
    value: 40
  },
  {
    label: '50%',
    value: 50
  },
  {
    label: '60%',
    value: 60
  },
  {
    label: '70%',
    value: 70
  },
  {
    label: '80%',
    value: 80
  },
  {
    label: '90%',
    value: 90
  },
  {
    label: '100%',
    value: 100
  }
];

const MultiRangeSlider = props => {
  const { min, max, dataList } = props;
  const [startRange, setStartRange] = useState(parseInt(min));
  const [endRange, setEndRange] = useState(parseInt(max));

  const classes = useStyles();

  return (
    <>
      <div className={classes.sliderContainer}>
        <div className={classes.startRangeWrapper}>
          <label className={classes.lable}>Arrival Time (hrs)</label>
          <input
            type="range"
            min="0"
            max="100"
            className={`${classes.slider} ${classes.rangeStart}`}
            id="myRange"
            step="10"
            list="list"
            value={startRange}
            onChange={event => {
              const value = parseInt(event.target.value);
              if (value < endRange) {
                setStartRange(value);
              }
            }}
          />
        </div>
        <div className={classes.endRangeWrapper}>
          <input
            type="range"
            min="0"
            max="100"
            className={`${classes.slider} ${classes.rangeEnd}`}
            id="myRange"
            step="10"
            list="list"
            value={endRange}
            onChange={event => {
              const value = parseInt(event.target.value);
              if (value > startRange) {
                setEndRange(value);
              }
            }}
          />
        </div>
      </div>
      <div className={classes.rangeTrackWrapper}>
        <div className={`${classes.rangeStartTrack} ${classes.rangeSliderInactive}`} style={{ width: startRange - min + 1 + '%' }} />
        <div className={`${classes.rangeMidTrack} ${classes.rangeSliderActive}`} style={{ width: endRange - startRange + 1 + '%' }} />
        <div className={`${classes.rangeEndTrack} ${classes.rangeSliderInactive}`} style={{ width: max - endRange + '%' }} />
      </div>
      <div className={classes.fullWidth}>
        <datalist id="list" className={classes.rangeSlider}>
          {listItems.map(option => {
            return <option key={`range-slider-${option.value}`} value={option.value} label={option.label} className="datalist-option" />;
          })}
        </datalist>
      </div>
    </>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  dataList: PropTypes.array
};

MultiRangeSlider.defaultProps = {
  min: 0,
  max: 100,
  dataList: []
};

export default MultiRangeSlider;
