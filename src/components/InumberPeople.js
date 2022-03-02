import { useState } from 'react';

const NumberPeople = (props) => {
    
    const [errMsg, setErrMsg] = useState(``);
    
    const handleNop = (event) => {
        let setNop = 0;
        if (event.target.value <= 0 || event.target.value === '' || isNaN(event.target.value)) {
            setErrMsg(`Can't be zero`);
        }
        else {
            setNop = Math.round(event.target.value);
            setErrMsg(``);
        }
        props.onChangeNop(setNop);
    }
    return (
        <>
            <div className="nop">
                <div className="nopTxt">
                <p>Number of People</p> <span>{errMsg}</span>
                </div>
                <input type="number" min='0' onChange={handleNop} placeholder={0} required />
            </div>
        </>);
}

export default NumberPeople;