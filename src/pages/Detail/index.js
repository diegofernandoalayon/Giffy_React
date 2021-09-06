import React from "react"
//se importa el hook para poder usar el context
import Gif from "../../components/Gif" // importamos el componente que muestra un gif
import './style.css'
import {Redirect} from 'wouter'
import useSingleGif from "../../hooks/useSingleGif"
// import useSEO from "../../hooks/useSEO"
import {Helmet} from 'react-helmet'
export default function Detail({ params }){
    const {id} = params
    const {gif,isLoading, isError} = useSingleGif({id: id})
    const title = gif ? gif.title: ''
    // useSEO({description:`Detail of ${title}`, title: title})
    if(isLoading) {
        return (
            <>
            <Helmet>
                <title>Cargando...</title>
            </Helmet>
            <i>Cargando ...</i>
            </>
        )
    }
    if(isError) return <Redirect to='/404'/>
    if(!gif) return null
    return (
    <>
        <Helmet>
            <title>{title} | Giffy</title>
        </Helmet>
        <Gif {...gif}/>
        <h3>ID: {gif.id}</h3>
        <h3>URL: {gif.url}</h3>
    </>
    )
}