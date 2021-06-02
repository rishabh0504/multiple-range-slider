import { useEffect, useRef, useState } from 'react';
import './index.css';

const MultiRangeSlider = (props) => {
    const { min = 0, max = 100, step = 10, datalist = [] } = props;
    const [startValue, setStartValue] = useState(min);
    const [endValue, setEndValue] = useState(max);

    const startRangeRef = useRef(null);
    const endRangeRef = useRef(null);

    return (
        <div className={`full-width`}>
            <input
                type='range'
                min={min}
                max={max}
                autoComplete="on"
                step={step}
                className={`range-input start-range`}
                value={startValue}
                ref={startRangeRef}
                list='markTics'
                onChange={() => {
                    setStartValue(startRangeRef.current.value)
                }}
            />
            <input
                type='range'
                min={min}
                max={max}
                autoComplete="on"
                step={step}
                className={`range-input end-range`}
                value={endValue}
                list='markTics'
                ref={endRangeRef}
                onChange={() => {
                    setEndValue(endRangeRef.current.value)
                }}
            />
            <datalist id='markTics' className='range-slider-datalist'>
                {
                    datalist.map(option => {
                        return <option
                            key={`range-slider-${option.value}`}
                            value={option.value} label={option.label} className='datalist-option'></option>
                    })
                }
            </datalist>
            <div className={`range-track`}>
                <div className="left-range inactive-range" style={{ width: startValue - 0 + '%', backgroundColor: '#d7d7d7' }}>
                </div>
                <div className="mid-range active-range" style={{ width: endValue - startValue + '%', backgroundColor: 'green' }}>
                </div>
                <div className="right-range inactive-range" style={{ width: 100 - endValue + '%', backgroundColor: '#d7d7d7' }}>
                </div>
            </div>
        </div>
    )
}

export default MultiRangeSlider;