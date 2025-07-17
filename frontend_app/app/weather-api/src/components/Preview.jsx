import useFetchApi from '../hooks/useFetchApi';
import './Preview.css';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { FavoritesContext } from './WeatherApp';

export function Preview({value, show, setShow, setErrorMessage}){
    const [ jsonData ] = useFetchApi(value);
    const [ favorites, setFavorites ] = useContext(FavoritesContext);

    const handleAddButtonClick = () => {
        if(isDuplicate()){
            setErrorMessage('すでに存在しているデータです。')
            setShow(false);
            return;
        }else{
            setFavorites(
                [
                    ...favorites,
                    {id: uuidv4(), value}
                ]
                )
        }
        setShow(false);
    }
    const isDuplicate = () => {
        return favorites.some(item => item.value === value);
    }
    if(show){
        return (
            <div id="overlay">
                <div id="content">
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

                    <button onClick={() => setShow(false)}>Cancel</button>
                    <button onClick={handleAddButtonClick}>Add</button>
                </div>
            </div>
        );
    }else{
        return null;
    }
}