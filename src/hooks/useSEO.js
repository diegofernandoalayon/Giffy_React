import {useEffect,useRef} from 'react'

//hook  para modificar el titulo de nuestra app, 
export default function useTitle ({description,title}){
    const prevTitle = useRef(document.title) //guardamos uno referencia del titulo anterior
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
    useEffect(()=>{
        const previousTitle = prevTitle.current //guardamos el valor del titulo anterior
        if(title){

            document.title = `${title} | Giffy` //se modifica el titulo par el titulo de la busqueda
        }
        return ()=>document.title = previousTitle // al final retornamos una funcion que se encarga de retornar el titulo original a la pagina
    },[title])
    useEffect(()=>{
        const previousDescription = prevDescription.current
        const metaDescription = document.querySelector('meta[name="description"]')
        if(description){
            metaDescription.setAttribute('content',description)   
        }
        
        return ()=> 
            metaDescription.setAttribute('content',previousDescription)
    },[description])
}