import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './WeatherApp';

export function Favorite(){
    const [ favorites, setFavorites ] = useContext(FavoritesContext);
    const handleDeleteButtonClick = (favorite) => {
        setFavorites(
            favorites.filter(target =>
                target.id !== favorite.id
            )
        );
    }
    
    return (
        <>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <Link to={`detail/${favorite.value}`}>{favorite.value}</Link>
                        <button onClick={() => handleDeleteButtonClick(favorite)}>削除</button>
                    </li>
                    ))}
            </ul>
        </>
    )
}