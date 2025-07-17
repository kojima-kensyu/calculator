import { useState, useEffect } from "react";
import env from "../env";


const readEnv = () => {
    return env.apiKey
}
export default function useFetchApi(pref){
    const [jsonData, setJsonData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const apiKey = readEnv();
                const params = {
                        q: pref,
                        appid: apiKey,
                        units: "metric",
                        lang: "ja"
                    }
                const queryString = new URLSearchParams(params).toString();
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${queryString}`;
                console.log(apiUrl);
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJsonData(data);
            }catch(error){
                console.error('Error fetching JSON data:', error.message);
            }
        };
        fetchData();
    },　[pref]);

    return [jsonData];
}