import React from 'react'
const Context = React.createContext({ //creamos un contexto, es un objeto que se crea como valor inicial, si no se tiene acceso a provider se pueden leer estos valores, pero si se tiene acceso se deben pasar en el value
    name:'midudev',
    suscribeteAlCanal: true
})

export default Context