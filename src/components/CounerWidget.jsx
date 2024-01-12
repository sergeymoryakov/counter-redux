export function CounerWidget({
    counter,
    onResetBtnClick,
    onIncrementBtnClick,
    onDecrementBtnClick,
}) {
    return (
        <div className="counter-widget">
            <p>{counter}</p>
            <div>
                <button onClick={onResetBtnClick}> C </button>
                <button onClick={onDecrementBtnClick}> -1 </button>
                <button onClick={onIncrementBtnClick}> +1 </button>
            </div>
        </div>
    );
}
