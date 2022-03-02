const BillAmount = (props) => {

    const handleBillAmount = (event) => {
        let setValue;
        if (event.target.value < 0 || event.target.value === '' || isNaN(event.target.value)) {
            setValue = 0;
        }
        else {
            setValue = event.target.value;
        }
        props.onChangeBill(setValue)
    }

    return (
        <>
            <div className="bill">
                <p>Bill</p>
                <input type="number" min='0' onChange={handleBillAmount} placeholder={0} step='0.1' required />
            </div>
        </>
    );
}

export default BillAmount;