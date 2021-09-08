import React, {useCallback} from "react"
// import {useLocation} from "wouter"
import {useGifs} from '../../hooks/useGifs' // funcion retornada sin default 
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from "../../components/TrendingSearches"
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"
        
const POPULAR_GIFS = ['tetonas','Matrix','Linda','Colombia','Chile','Venezuela']

export default function Home(){
    // const [keyword,setKeyword] = useState('')
   
    
    const {loading, gifs} = useGifs()

   
    
 
   
    return(
        
        <>
        <Helmet>
            <title>Home | Giffy</title>
        </Helmet>
       <SearchForm />
        <div className='content'>
            <div className="List">
        
            <h3>Ultimas Busquedas</h3>
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