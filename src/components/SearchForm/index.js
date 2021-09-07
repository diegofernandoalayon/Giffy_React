import React, {useState} from 'react'
import {useLocation} from 'wouter'

const RATINGS = ['g','pg','pg-13','r']
const LIMIT = ['5','10','15','20']
function SearchForm({initialKeyword = '',initalRating='g',initialLimit='10'}){
    const [keyword,setKeyword] = useState(decodeURI(initialKeyword))
    // console.log(initialLimit)
    const [limit, setLimit] = useState(initialLimit)
    const [rating, setRating] = useState(initalRating)
    const [path, pushLocation] = useLocation()
    const handleSubmit = event =>{ //lo que se debe hacer al momento de enviar
        event.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${limit}/${rating}`)
        // onSubmit({keyword,limit})
    }
    const handleChange = event =>{ //lo que acuerre con cada cambio en el texto
        setKeyword(event.target.value) //actualizamos la keyword con cada letra que se ponga
    }
    const handleLimit = event =>{
        setLimit(event.target.value) 
       
    }
    const handleChangeRating = (event)=>{
        setRating(event.target.value)
    }
    return(
        <form onSubmit={handleSubmit} className='search'>
        <input placeholder="search a gif here ..." onChange={handleChange} type='text' value={keyword} autoFocus />
        {/* <select onChange={handleLimit} name={limit}>
            <option value={''}>selecciona</option>
            <option value={'5'}>5 gifs</option>
            <option value={'15'}>15 gifs</option>
            <option value={'25'}>25 gifs</option>
        </select> */}
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
    </form>
        )
}
export default React.memo(SearchForm)