import React from 'react';
import { useParams } from "react-router-dom";
import useFetchApi from '../hooks/useFetchApi';


export function Display() {
    const { pref } = useParams(); 
    const [jsonData] = useFetchApi(pref);

    return (
        <div>
            <h1>{pref}</h1>
            <div>
                {jsonData && (
                    <div>
                        <h2>現在の天気</h2>
                        <p>{jsonData.name}</p>
                        <p>{jsonData.main.temp}度</p>
                        <p>{jsonData.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}