import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions";
import { getCounter } from "./selector";
import { CounerWidget } from "../../components/CounerWidget";

function CounterPage() {
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();

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
