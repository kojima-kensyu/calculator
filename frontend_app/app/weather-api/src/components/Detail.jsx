import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import useFetchApi from '../hooks/useFetchApi';

export function Detail(){
    const { pref } = useParams();
    const [jsonData] = useFetchApi(pref);
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1>{pref}</h1>
                {jsonData && (
                    <div>
                    <h2>現在の天気</h2>
                    <p>{jsonData.name}</p>
                    <p>{jsonData.main.temp}度</p>
                    <p>{jsonData.weather[0].description}</p>
                    </div>
                )}
            </div>
            <div>
                <button onClick={() => navigate('/')} >ホームに戻る</button>
            </div>
        </>
    )
}