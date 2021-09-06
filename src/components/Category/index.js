import React from 'react'
import {Link} from 'wouter'


 function Category({name,options=[]}){
    return(
       <>
           <h3>{name}</h3>
           <ul>
               {
                options.map((single)=>(
                <li key={single}>
                    <Link to={`/search/${single}/20`}>Gifs de {single}</Link>
                </li>      
                ))
               }
           </ul>
       </>
        )
}
export default React.memo(Category) // para memorizar las categorias y no tener que renderizarlas cada vez