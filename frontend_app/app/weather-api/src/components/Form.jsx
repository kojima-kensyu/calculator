import React from 'react';
import Prefs from '../consts/Prefs';

export function Form(){
    return (
    <select value>
        {Object.keys(Prefs).map((key) => (
            <option key={key} value={Prefs[key]}>
                {key}
            </option>
        ))}
    </select>
    );
}