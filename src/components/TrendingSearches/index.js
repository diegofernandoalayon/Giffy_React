import React,{Suspense} from 'react'
import useNearScreen from '../../hooks/useNearScreen'
const TrendingSearches = React.lazy(()=>import('./TrendingSearches'))//import() es dinamico, se usa para cargar solo cuando necesitemos

export default function LazyTrending(){
   
    const {isNearScreen,fromRef} = useNearScreen({distance:"200px"})
    
    
    return <div ref={fromRef}> {/*para asignar la referencia de este elemento */}
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches />:null}
        </Suspense>
    </div>
}