import React from 'react';
import { useState } from 'react';


// input components ---> components on left/top side
import BillAmount from './IbillAmount';
import NumberPeople from './InumberPeople';
import TipPercentage from './ItipPercentage';
// Output components ---> components on right/bottom side
import TipAmount from './Otip'
import TotalAmount from './Ototal';
import ResetBtn from './ResetBtn';

// Style components
import Logo from '../assets/logo.svg'
import LogoStyled from '../style/LogoStyled';

import GlobalStyle from '../style/GlobalStyles';
import ContainerStyled from '../style/ContainerStyled';

import InputStyle from '../style/InputStyle';
import OutputStyle from '../style/OutputStyle';


function App() {
    // BILL, PERCENTAGE, NUMBER-OF-PEOPLE 
    const [bill, setBill] = useState(0);
    const [percent, setPercentage] = useState(0);
    const [nop, setNop] = useState(0);

    const handleBill = (value) => {
        setBill(value);
    }
    const handlePercentage = (value) => {
        setPercentage(value);
    }
    const handleNop = (value) => {
        setNop(value);
    }
    /* TIP: formula, TOTAL: totalFormula
       TIP: (BILL * (PERCENTAGE/100))/NOP
       TOTAL: ((BILL/NOP) + TIP) */
    let formula = parseFloat((bill * (percent / 100)) / nop);
    let totalFormula = parseFloat((bill / nop) + formula).toFixed(2);

    const tip = (bill, percent, nop) => {
        if (formula < 0 || isNaN(formula) || !isFinite(formula)) {
            return (0).toFixed(2);
        } else {
            return formula.toFixed(2);
        }
    }

    let resetDisable = true;

    const total = (bill, nop) => {
        if (totalFormula <= 0 || isNaN(totalFormula) || !isFinite(totalFormula)) {
            resetDisable = true;
            return (0).toFixed(2);
        } else {
            resetDisable = false;
            return totalFormula;
        }
    }

    return (
        <div className="App" >
            <GlobalStyle />
            <LogoStyled src={Logo} />
            <ContainerStyled>
                <InputStyle>
                    <BillAmount onChangeBill={handleBill} />
                    <TipPercentage onChangePercentage={handlePercentage} />
                    <NumberPeople onChangeNop={handleNop} />
                </InputStyle>
                <OutputStyle>
                    <TipAmount tip={tip(bill, percent, nop)} />
                    <TotalAmount total={total(bill, percent, tip)} />
                    <ResetBtn
                        disableBtnValue={resetDisable}
                        setBill={setBill}
                        setPercentage={setPercentage}
                        setNop={setNop} />
                </OutputStyle>
            </ContainerStyled>
        </div>
    );
}

export default App;