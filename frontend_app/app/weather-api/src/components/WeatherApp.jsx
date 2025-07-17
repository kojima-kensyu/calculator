import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Display } from './Display';
import './WeatherApp.css'
import { Form } from './Form';
import { Home } from './Home';
import { Favorite } from './Favorite';
import { Detail } from './Detail';
import Prefs from '../consts/Prefs'
import { createContext } from 'react';

export const FavoritesContext = createContext(null);

export function WeatherApp(){
    const [favorites, setFavorites] = useState([]);
    return(
        <div>
            <h1>WeatherApp</h1>
            <FavoritesContext.Provider value={[favorites, setFavorites]}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/detail/:pref" element={<Detail />}/>
                    </Routes>
                </Router>
            </FavoritesContext.Provider>
        </div>
            
    );
}