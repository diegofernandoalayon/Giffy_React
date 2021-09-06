import React, {useContext, useEffect, useState} from "react"
import getGifs from "../services/getGifs"
import GifsContext from "../context/GifsContext"

// esto es un custom hook
const INITIAL_PAGE = 0
export function useGifs({keyword,limit} = {keyword: null}){

const [loading, setLoading] = useState(false)
const [loadingNextPage, setLoadingNextpage] = useState(false)
const [page, setPage] = useState(INITIAL_PAGE) //estado para la paginacion
const {gifs, setGifs} = useContext(GifsContext)

//recuperamos la keyword del local storage si no pasamos nada
const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "random"
useEffect(()=>{
    setLoading(true)
    getGifs({keyword: keywordToUse,limit})
    .then(gifs =>{
        setGifs(gifs)
        setLoading(false)
        //guardamos la keyword de la ultima busqueda en el localStorage
        localStorage.setItem('lastKeyword',keywordToUse)
    })
},[keyword,setGifs,keywordToUse])//segundo argumento son la lista de dependencias del efecto, si no se pone nada, se ejecuta solo la primera vez,
//poner keyword hace que cada que se actualice keyword se renderice nuevamente el coponente 
useEffect(function(){
    if(page === INITIAL_PAGE)return
    setLoadingNextpage(true)

    getGifs({keyword:keywordToUse, page, limit})
    .then(nextGifs =>{
        setGifs(prevGifs=>prevGifs.concat(nextGifs))
        setLoadingNextpage(false)
    })
},[page,keywordToUse])
return {loading, loadingNextPage, gifs,setPage}
}