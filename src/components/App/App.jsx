import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, rndDecrement, rndIncrement } from "../../store/actions"

const App = () => {

    const { count } = useSelector((state) => state);
    const dispatch = useDispatch();

    const onIncrement = () => dispatch(increment());
    const onDecrement = () => dispatch(decrement());
    const onRndIncrement = () => dispatch(rndIncrement());
    const onRndDecrement = () => dispatch(rndDecrement());

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrement}>INC</button>
            <button onClick={onDecrement}>DEC</button>
            <button onClick={onRndIncrement}>-RND</button>
            <button onClick={onRndDecrement}>+RND</button>
        </div>
    )
}

export default App