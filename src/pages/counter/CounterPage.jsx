import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, load } from "./actions";
import { getCounter } from "./selector";
import { CounerWidget } from "../../components/CounerWidget";
import { useEffect } from "react";

function CounterPage() {
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load());
    }, [dispatch]);

    const handleResetBtnClick = () => {
        dispatch(reset());
    };

    const handleIncrementBtnClick = () => {
        dispatch(increment());
    };

    const handleDecrementBtnClick = () => {
        dispatch(decrement());
    };

    return (
        <CounerWidget
            counter={counter}
            onResetBtnClick={handleResetBtnClick}
            onIncrementBtnClick={handleIncrementBtnClick}
            onDecrementBtnClick={handleDecrementBtnClick}
        />
    );
}

export default CounterPage;
