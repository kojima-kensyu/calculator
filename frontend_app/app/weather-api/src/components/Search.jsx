export function Search({value, onChange}){
    return (
        <>
        <input type='text' value={value} onChange={onChange}/>
        </>
    );
}