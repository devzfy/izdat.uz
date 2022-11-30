import { useState, useEffect } from "react";

const windowDimensions = ()=>{
     const {innerWidth:width, innerHeight:height} = window
     return {
        width,
        height
     }
}

export const useWindowDimensions = ()=>{
    const [dimension, setDimension] = useState(windowDimensions())


    useEffect(()=>{
        function handelSize (){
            setDimension(windowDimensions)
        }
        window.addEventListener('resize', handelSize)
        return ()=> window.removeEventListener('resize', handelSize)
    },[])

    return dimension
}
