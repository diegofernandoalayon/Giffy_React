import {useGifs} from './useGifs'
import {useEffect, useState} from 'react'
import getSingleGif from '../services/getSingleGif'

//hook para adquirir solo un gif, se usa para la pagina de detalle, si el gif existe lo buscamos en la lista que tenemos, pero si no lo tenemos y entramos directamente al gif mediante url, se llama el servicio que usa la api para un solo gif por su id
export default function useSingleGif({id}){
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id ===id) 
    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(function(){
        if(!gif){
            setIsLoading(true)
            //llamar al servicio si no tenemos gifs en la lista
            getSingleGif({id})
            .then(gif=>{
                setGif(gif)
                setIsLoading(false)
            }).catch(err =>{
                setIsLoading(false)
                setIsError(true)
            })
        } 
    },[gif,id])
    return {gif,isLoading, isError}
}