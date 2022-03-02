const TipPercentage = (props) => {
    
    let buttons = document.getElementsByClassName('pbtn');

    const handlePercentage = (event) => {
        let setPercentage;
        if (event.target.value < 0 || event.target.value === '' || isNaN(event.target.value)) {
            setPercentage = 0;
        }
        else {
            setPercentage = event.target.value;
        }

        for(let i=0; i<buttons.length; i++){
            buttons[i].style.background = '#00494d';
            buttons[i].style.color = 'white';
        }
        props.onChangePercentage(setPercentage);
    }

    const handleBtnPercent = (btn) => {
        document.getElementById('pInput').value = '';
        let currElem = btn.target;
        
        currElem.style.background = '#26c0ab40';
        currElem.style.color = '#00494d';

        btn.preventDefault();
        props.onChangePercentage(currElem.value);

        function elemOfRemStyl(arrElem) {
            return arrElem !== currElem;
        }

        let newArr = Object.values(buttons).filter(elemOfRemStyl);
        for (let i = 0; i < newArr.length; i++) {
            newArr[i].style.background = '#00494d';
            newArr[i].style.color = 'white';
        }

        }

    return (
        <>
            <div className="percentage">
                <p>Select Tip %</p>
                <div className="btn-container">
                    <button className="pbtn" onClick={handleBtnPercent} value='5'>5%</button>
                    <button className="pbtn" onClick={handleBtnPercent} value='10'>10%</button>
                    <button className="pbtn" onClick={handleBtnPercent} value='15'>15%</button>
                    <button className="pbtn" onClick={handleBtnPercent} value='25'>25%</button>
                    <button className="pbtn" onClick={handleBtnPercent} value='50'>50%</button>

                    <input id="pInput" type="number" min='0' onChange={handlePercentage} placeholder='CUSTOM' />
                </div>
            </div>
        </>
    );
}

export default TipPercentage;