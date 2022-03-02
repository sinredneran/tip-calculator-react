const TotalAmount = (props) => {
    return (
        <>
            <div className="total out-container">
                <div className="txt">
                <p>Total</p><span>/ person </span>
                </div>
                <div className="num">
                {props.total}
                </div>
            </div>
        </>
    );
}

export default TotalAmount;