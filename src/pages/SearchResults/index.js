import React, {useCallback,useRef,useEffect} from "react"
import ListOfGifs from '../../components/ListOfGifs'
import {useLocation} from "wouter"
import {useGifs} from '../../hooks/useGifs' // funcion retornada sin default 
import TrendingSearches from "../../components/TrendingSearches"
import useNearScreen from "../../hooks/useNearScreen"
import debounce from "just-debounce-it"
import SearchForm from "../../components/SearchForm"
import {Helmet} from 'react-helmet'

export default function SearchResults({params}){

   
    const {keyword,limit,rating = 'g'} = params
    const {loading, gifs,setPage} = useGifs({keyword,limit,rating})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef: loading ? null:externalRef, once:false})
    //const handleNextPage = () => setPage(prevPage => prevPage + 1) // se podria hacer retornando el valor del hook
    const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}` : ''
    // useSEO({title})



   
    // const handleNextPage= ()=> console.log('next page')

    const debounceHandleNextPage =useCallback(debounce(()=> setPage(prevPage => prevPage + 1),500),[setPage])

    useEffect(function (){
        // console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage,isNearScreen])

    const [path, pushLocation] = useLocation()

    const handleSubmit = useCallback(({keyword,limit})=>{
        pushLocation(`/search/${keyword}/${limit}`)
    },[pushLocation])// se usa useCallback, para que solo cuando cambie el pushLocation
    
    return <>
    {
        loading ? <i>Cargando 🥁🥁</i> //si el estado de loading es true se ponen los tambores, seria para mostrar algo mientras se esta cargando
        : <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <SearchForm initialKeyword={keyword} initialRating={rating} initialLimit={limit}/>
            <h3>
            {decodeURI(keyword)}
            </h3>
            <div className='content'>
                <div className="List">
                <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches/>
                </div>
            </div>
                <div id="visor" ref={externalRef}></div>
        </>
        
        
        
    }
    </>
}
