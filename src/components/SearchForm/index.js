import React, {useState} from 'react'
import {useLocation} from 'wouter'
function SearchForm({onSubmit}){
    const [keyword,setKeyword] = useState('')
    const [limit, setLimit] = useState('10')
    const [path, pushLocation] = useLocation()
    const handleSubmit = event =>{ //lo que se debe hacer al momento de enviar
        event.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${limit}`)
        // onSubmit({keyword,limit})
    }
    const handleChange = event =>{ //lo que acuerre con cada cambio en el texto
        setKeyword(event.target.value) //actualizamos la keyword con cada letra que se ponga
    }
    const handleLimit = event =>{
        setLimit(event.target.value) 
    }
    // const handleSubmit = useCallback(({keyword,limit})=>{
    //     pushLocation(`/search/${keyword}/${limit}`)
    // },[pushLocation])// se usa useCallback, para que solo cuando cambie el pushLocation
    return(
        <form onSubmit={handleSubmit} className='search'>
        <input placeholder="search a gif here ..." onChange={handleChange} type='text' value={keyword} autoFocus />
        <select onChange={handleLimit} name={limit}>
            <option value={''}>selecciona</option>
            <option value={'5'}>5 gifs</option>
            <option value={'15'}>15 gifs</option>
            <option value={'25'}>25 gifs</option>
        </select>
        <button>Buscar</button>
    </form>
        )
}
export default React.memo(SearchForm)