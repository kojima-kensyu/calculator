import React from 'react';

function CounterButton({ handle, children }){
    return(
        <div>
            <button onClick={handle}>
                {children}
            </button>
        </div>
    );
}
export default CounterButton;