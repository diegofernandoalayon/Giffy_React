import React from 'react'
import {Link} from 'wouter'
import {CategoryTitle,CategoryLink, CategoryList,CategoryListItems} from './styles'


 function Category({name,options=[]}){
    return(
       <>
           <CategoryTitle>{name}</CategoryTitle>
           <CategoryList>
               {
                options.map((single,index)=>(
                <CategoryListItems key={single} index={index}>
                    <CategoryLink to={`/search/${single}/20`} index={index}>{single}</CategoryLink>
                </CategoryListItems>      
                ))
               }
           </CategoryList>
       </>
        )
}
export default React.memo(Category) // para memorizar las categorias y no tener que renderizarlas cada vez