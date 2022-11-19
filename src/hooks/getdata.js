import { useState, useEffect } from "react"
import axios from 'axios'
export const GetData = (url)=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(()=>{
        axios.get(url)
            .then(res => setData(res.data))
            .then(() => setLoading(false))
            .then(err => setError(err))
    }, [url])
    return [loading, data, error]
}