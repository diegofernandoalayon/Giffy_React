
import {API_KEY,API_URL} from './settings'

export default function getGifs({keyword='morty',rating='g',limit=25, page=0}={}){
  
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=en` // offset se usa para la paginacion, y calculamos page * limit para saber cuantos resultados se deben saltar 

    return fetch(apiURL)
        .then(res => res.json())
        .then(response =>{
          const {data = []} = response
          if(Array.isArray(data)){
              const gifs = data.map(image =>{
                  //extraemos atributos de cada gif
                  const {images,title,id}=image
                  const  {url} = images.downsized_medium
                  return {title, id, url}
                })
                // console.log(gifs)
              return gifs
          }
        })
    }