import {useEffect, useState, useRef} from 'react'
/* hook para hacer lazy load, se pude indicar el parametro de distancia y retorna si se cumple esta distancia y un ref para el elemento*/
export default function useNearScreen({distance = "100px",externalRef, once = true}={}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef() //  useRef es como un baul, permite guardar valores que entre renderizados se mantiene inalterable, pero cuando cambia el valor no vuelve a renderizar el componente
    
    useEffect(function(){
        let observer;

        const element = externalRef ? externalRef.current : fromRef.current
        
        const onChange = (entries,observer)=>{
            const el = entries[0]
            if(el.isIntersecting){
                setShow(true)
                once && observer.disconnect() // para desconectar el observer luego de que sea true la primera vez,
            }else{
                !once && setShow(false)
            }
            
        }
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import ('intersection-observer') // hacemos promesa para evaluar si el navegador soporta intersectionObserver de ser asi usaremos este, pero si no lo soporta se importa el polyfill
        ).then(()=>{ 

             observer = new IntersectionObserver(onChange,{
                rootMargin: distance
            })
     

            if(element){ // para garantizar que no observe un elemento que no existe
                // console.log('casa')
                // console.log(element)
                observer.observe(element)//para acceder a la referencia se hace con .current
            }
        })

       
        


       return ()=> observer && observer.disconnect()
    })
    return {isNearScreen,fromRef}
}
