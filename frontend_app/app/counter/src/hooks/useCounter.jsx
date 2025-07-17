import { useState } from 'react';

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const increment_10 = () => setCount(count + 10);
    const decrement = () => {
        if(count <= 0){
            setCount(0);
        }
        else{
            setCount(count -1)
        }
    };
    const reset = () => setCount(0);
    
    return {count, increment, increment_10, decrement, reset}
}

export default useCounter;