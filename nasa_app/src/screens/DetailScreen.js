import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const DetailScreen = () => {

    const params = useParams();

    const date = params.date
    const [info, setInfo] = useState()
    
    

    useEffect(() => {
        const data = axios.get(`https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=${date}`).then(resp => {
            setInfo(resp.data);
        });
        
    }, [date])
    

    return (
        <>
            <h1>Detalle día {date}</h1>
            <div>
                {info && JSON.stringify(info)}
            </div>
        </>
    )
}
