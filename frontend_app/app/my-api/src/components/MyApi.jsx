import React, {useState} from 'react';
import useFetchApi from '../hooks/useFetchApi';
import {RadioButton} from './RadioButton';

export function MyApi(){
    const {
        jsonData,
        setId
    } = useFetchApi();
    
    const [selectedId, setSelectedId] = useState(1);

    const handleIdChange = (id) =>  {
        setSelectedId(id);
        setId(id);
    }

    return(
        <div>
            <h1>MyJsonData</h1>
            <div>
                <h2>ToDo</h2>
                {[1, 2, 3].map((id) => (
                    <RadioButton 
                        key={id.toString()}
                        value={id.toString()}
                        checked={selectedId === id}
                        onChange={() => handleIdChange(id)}
                    />
                ))}
            </div>
            <div>
                <h3>Selected ToDo</h3>
                {jsonData && (
                    <div>
                        <p>{jsonData.title}</p>
                        <p>{jsonData.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}