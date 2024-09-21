
import { CSSProperties } from 'react';
import './LockSlider.css'

interface LockSliderProps {
    handleInput: (e: any) => void;
    sliderValue: number;
    width?: string;
}

export default function LockSlider({handleInput, sliderValue, width}: LockSliderProps) {
    let sliderStyle: CSSProperties = {
        appearance: 'none',
        width: !width ? "300px" : width,
        height: "50px",
        background: "#d3d3d3",
        outline: "none",
        borderRadius: '25px'
    };
  return (
    <input 
    type='range' 
    className='slider mb-2' 
    style={sliderStyle}
    value={sliderValue}
    onInput={handleInput}
    />
  )
}
