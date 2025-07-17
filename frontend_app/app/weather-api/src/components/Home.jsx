import React,{ useState, useContext } from 'react';
import { Search } from './Search';
import { Favorite } from './Favorite';
import { Preview } from './Preview';
import { Detail } from './Detail';
import useFetchApi from '../hooks/useFetchApi';
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
import { FavoritesContext } from './WeatherApp'; 

export function Home(){
    const [searchTarget, setSearchTarget] = useState('');
    const [prefName, setPrefName] = useState('東京都');
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [jsonData] = useFetchApi(prefName);

    const handleTextareaChange = (e) => {
        setSearchTarget(e.target.value);
    };

    const handleButtonClick = () => {
        setPrefName(searchTarget);
        setShow(true);
    }

    return (
        <>
            <Search value={searchTarget} onChange={handleTextareaChange}/>
            <button onClick={handleButtonClick}>送信</button>
            <br />
            {errorMessage}
            <Favorite />
            <Preview value={prefName} show={show} setShow={setShow} setErrorMessage={setErrorMessage}/>
        </>
    );
}