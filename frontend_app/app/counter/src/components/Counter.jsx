import CounterButton from './CounterButton';
import useCounter from '../hooks/useCounter';
import './Counter.css';

export function Counter({ counter_type }){
    const { count, increment, increment_10, decrement, reset } = useCounter(0);
    return (
        <div className="counter">
            <h1 className="title">Counter: { count }</h1>
            <div className="button">
                <CounterButton handle={ increment }>Increment</CounterButton>
                {counter_type === 1 && <CounterButton handle={ increment_10 }>Increment10</CounterButton>}
                <CounterButton handle={ decrement }>Decrement</CounterButton>
                <CounterButton handle={ reset }>Reset</CounterButton>
            </div>
        </div>
    );
}
