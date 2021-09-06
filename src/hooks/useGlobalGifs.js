import {useContext} from 'react'
import GifsContext from '../context/GifsContext'

//creacion de custom hook que lo unico que hace es retornar los gifs
export default function useGlobalGifs(){
    const {gifs} = useContext(GifsContext)
    return gifs
}