// import { useState } from "react";

const ResetBtn = (props) => {
    // const [resetStyle, setResetStyle] = useState();

    return (
        <>
            <div className="reset-btn">
                <button type='reset' onClick={() => {
                    props.setBill(0);
                    props.setNop(0);
                    props.setPercentage(0);

                    let buttons = document.getElementsByClassName('pbtn');
                    for(let i=0; i<buttons.length; i++){
                        buttons[i].style.background = '#00494d';
                        buttons[i].style.color = 'white';
                    }

                }} disabled={props.disableBtnValue} style={props.disableBtnValue?
                {background:'#26c0ab40', cursor: 'not-allowed'}
                :{background:'#26c0ab'}} >RESET</button>
            </div>
        </>);
}

export default ResetBtn;