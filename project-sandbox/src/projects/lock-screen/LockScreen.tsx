import { useState } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';
import LockScreenImg from './img/moon.jpg';
import HomeScreenImg from './img/home.jpg';

export default function LockScreen() {
    const [showLockSlider, setShowLockSlider] = useState(true);
    const [uiProps, setUiProps] = useState({
        uiText: 'Slide to unlock',
        uiColor: "#eee",
        uiBg: `url('${LockScreenImg}') center/cover no-repeat`,
        uiBgSize: 'cover'
    });
    const [sliderValue, setSliderValue] = useState(0);
    const hanldeSliderInput = (e: any)  => {
        setSliderValue(e.target.value);
        if (e.target.value >= 100) {
            setShowLockSlider(false);
            setUiProps({
                uiText: 'Press to lock',
                uiColor: "#000",
                uiBg: `url('${HomeScreenImg}') center/cover no-repeat`,
                uiBgSize: 'cover'
            });
        }
    }
    const handleLock = () => {
        setShowLockSlider(true);
        setUiProps({
            uiText: 'Slide to unlock',
            uiColor: "#eee",
            uiBg: `url('${LockScreenImg}') center/cover no-repeat`,
            uiBgSize: 'cover'
        });
        setSliderValue(0);
    }
    return (
        <div 
            className='container text-center flex d-flex flex-column border-20 shadow-md'
            style={{
                height: '70vh',
                marginTop: '15vh',
                width: 340,
                border: "4px solid #000",
                background: uiProps.uiBg,
            }}
        >
            <h1 
                className='title'
                style={{ color: uiProps.uiColor }}
            >
                {uiProps.uiText}
            </h1>
            {showLockSlider ? (
                <LockSlider 
                    width={"250px"} 
                    handleInput={hanldeSliderInput}
                    sliderValue={sliderValue} 
                />
            ) : (
                <AiFillUnlock 
                    className='unlockIcon'
                    onClick={handleLock}
                />
            )}
        </div>
    )
}