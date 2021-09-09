import { useReducer } from "react"


const ACTIONS = {
    UPDATE_KEYWORD: 'keyword',
    UPTADE_RATING: 'rating',
    UPDATE_LIMIT: 'limit'
}
const reducer =(state, action) =>{
    
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
export default function useForm  ({initialKeyword='',initialRating='g',initialLimit='100'}={}) {
    const [state, dispatch] = useReducer(reducer,{
        keyword:decodeURI(initialKeyword),
        rating:initialRating,
        limit:initialLimit,
        times: 0}) // useReducer retorna el estado y un metodo dispatch, y recibe, un reducer y un initialState
    
    const {keyword, rating, times,limit} = state
    return {
        keyword,
        rating,
        times,
        limit,
        dispatch,
        updateKeyword: (keyword) =>
            dispatch({type: ACTIONS.UPDATE_KEYWORD,payload:keyword}),
        updateRating: (rating) => 
            dispatch({type: ACTIONS.UPTADE_RATING,payload:rating}),
        updateLimit: (limit) =>
            dispatch({type: ACTIONS.UPDATE_LIMIT,payload:limit})
           
    }
}


