import React from 'react';

export function RadioButton({value, checked, onChange}){
    return(
        <label key={value}>
            <input 
                type="radio" 
                value={value}
                checked={checked} 
                onChange={onChange}
            />
            {value}
        </label>
    );

}