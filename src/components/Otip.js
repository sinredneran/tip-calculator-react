const TipAmount = (props) => {
    return (
        <>
            <div className="tip out-container">
                <div className="txt">
                <p>Tip Amount</p><span>/ person </span>
                </div>
                <p className="num">
                {props.tip}
                </p>
            </div>
        </>
    );
}

export default TipAmount;