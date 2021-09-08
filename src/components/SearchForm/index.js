import React, {useState,useReducer} from 'react'
import {useLocation} from 'wouter'

const RATINGS = ['g','pg','pg-13','r']
const LIMIT = ['5','10','15','20'] 
const ACTIONS = {
    UPDATE_KEYWORD: 'keyword',
    UPTADE_RATING: 'rating',
    UPDATE_LIMIT: 'limit'
}
const reducer =(state, action) =>{
    console.log(action)
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return{
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }
        case ACTIONS.UPTADE_RATING:
            return{
                ...state,
                rating:action.payload
            }
        case ACTIONS.UPDATE_LIMIT:
            return{
                ...state,
                limit: action.payload
            }
        default:
            return state

    }
}

function SearchForm({initialKeyword = '',initialRating='g',initialLimit='10'}){
  
    // const [limit, setLimit] = useState(initialLimit)
    // const [rating, setRating] = useState(initialRating)
    const [state, dispatch] = useReducer(reducer,{
        keyword:decodeURI(initialKeyword),
        rating: initialRating,
        limit: 10,
        times: 0}) // useReducer retorna el estado y un metodo dispatch, y recibe, un reducer y un initialState
    const {keyword, rating,times,limit} = state
    const [path, pushLocation] = useLocation()
    const handleSubmit = event =>{ //lo que se debe hacer al momento de enviar
        event.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${limit}/${rating}`)
        // onSubmit({keyword,limit})
    }
 
    const handleChange = event =>{ //lo que acuerre con cada cambio en el texto
        // setKeyword(event.target.value) //actualizamos la keyword con cada letra que se ponga
        dispatch({type: ACTIONS.UPDATE_KEYWORD,payload:event.target.value})
    }
    const handleLimit = event =>{
        dispatch({type: ACTIONS.UPDATE_LIMIT,payload:event.target.value}) 
       
    }
    const handleChangeRating = (event)=>{
        dispatch({type: ACTIONS.UPTADE_RATING,payload:event.target.value})
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