import React from 'react'
import {useLocation} from 'wouter'
import useForm from './hook'

const RATINGS = ['g','pg','pg-13','r']
const LIMIT = ['5','10','15','20'] 

function SearchForm({initialKeyword = '',initialRating='g',initialLimit='10'}){
  
    const {keyword, rating,times,limit,updateKeyword,updateRating, updateLimit} = useForm({initialKeyword,initialRating,initialLimit})
    const [path, pushLocation] = useLocation()
    const handleSubmit = event =>{ //lo que se debe hacer al momento de enviar
        event.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${limit}/${rating}`)
    }
 
    const handleChange = event =>{ //lo que acuerre con cada cambio en el texto
        updateKeyword(event.target.value)      
    }
    const handleLimit = event =>{
        updateLimit(event.target.value) 
    }
    const handleChangeRating = (event)=>{
        updateRating(event.target.value) 
    }
    return(
        <form onSubmit={handleSubmit} className='search'>
        <input placeholder="search a gif here ..." onChange={handleChange} type='text' value={keyword} autoFocus />
        <select onChange={handleLimit} value={limit}>
            <option disabled>Limit</option>
            {
                LIMIT.map(limit =><option key={limit} value={limit}> {limit} Gifs</option>)
            }
        </select>
        <select onChange={handleChangeRating} value={rating}>
            <option disabled>Rating</option>
            {RATINGS.map(rating =><option key={rating}>{rating}</option>)}
        </select>
        <button>Buscar</button>
        <small>{times}</small>
    </form>
        )
}
export default React.memo(SearchForm)