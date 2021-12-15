import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

     //useEffect indica que ese codigo solo será ejecutado cuando el componente es renderizado por primera vez
    useEffect( () => {
            getGifs(category)
                .then( imgs => setstate({
                    data: imgs,
                    loading: false
                }));
    }, [category] );

    return state;
}