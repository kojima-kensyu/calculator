import { useEffect,useState } from 'react';

export default function useFetchApi(){
    const [jsonData, setJsonData] = useState(null);
    const [id, setId] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('my-api.json');
                const data = await response.json();
                const selectedTodo = data && data.todos.find((todo) => todo.id === id);
                setJsonData(selectedTodo);
            } catch(error) {
                console.error('Error fetching JSON data:', error.message);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        if(jsonData){
            console.log('JSON Data:', jsonData);
        }
    },[jsonData]);


    return {jsonData, setId}
};