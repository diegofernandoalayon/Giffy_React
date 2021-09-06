import React, {useCallback} from "react"
import {useLocation} from "wouter"
import {useGifs} from '../../hooks/useGifs' // funcion retornada sin default 
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from "../../components/TrendingSearches"
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"
        
const POPULAR_GIFS = ['tetonas','Matrix','Linda','Colombia','Chile','Venezuela']

export default function Home(){
    // const [keyword,setKeyword] = useState('')
   
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword,limit})=>{
        pushLocation(`/search/${keyword}/${limit}`)
    },[pushLocation])// se usa useCallback, para que solo cuando cambie el pushLocation
    
 
   
    return(
        
        <>
        <Helmet>
            <title>Home | Giffy</title>
        </Helmet>
       <SearchForm onSubmit={handleSubmit}/>
        <div className='content'>
            <div className="List">
        
            <h4>Ultimas Busquedas</h4>
            <ListOfGifs gifs={gifs} /> {/*componente para listas los gifs*/}
            </div>
            {/* <Category name='Los Gifs más populares' options={POPULAR_GIFS}/>  */}
            {/*componente para asignar categorias*/}
            <div className="App-category">
                <TrendingSearches/>
            </div>
        </div>
        </>
        )
}