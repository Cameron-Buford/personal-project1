import React, {useState, useEffect} from 'react'
import axios from 'axios'




const hooks = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
     const {data} = await axios.get('/api/data');
     setData(data);
 }   
 getData(); 
 }, []);
 
    return (
        <div>
            {data.map( t => {
                return (
                    <div key= {t.id}>
                        <p>{t.data}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default data;