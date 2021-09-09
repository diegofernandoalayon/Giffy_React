import {act,renderHook} from '@testing-library/react-hooks'
import useForm from './hook'

test('should change keyword',()=>{
    const {result} = renderHook(()=>useForm()) // indicamos que renderizaremos el hook useForm y este nos da un resultado,
    act(()=>{ // nos permite simular como se comporta react en un simulador 
        result.current.updateKeyword('batman')// accedermos a el resultado.curren y hacemos uso de la funcion updateKeyword('batman') para actualizar la palabra, updateKeyword internamente tiene el dispatch 
    })
    expect(result.current.keyword).toBe('batman') // indicamos donde esperamos un cambio con el result.current.keyword y con el toBe('batman') indicamos cual seria el resultado deseado
})

test('should use initial values',()=>{ //para probar si toma los valores iniciales
    const {result} = renderHook(()=> useForm({
        initialKeyword: 'matrix'
    }))
    expect(result.current.keyword).toBe('matrix')
})
test('should update corrently times when used twice',()=>{
    const {result} = renderHook(()=> useForm({
        initialKeyword: 'matrix'
    }))
    act(()=>{ // nos permite simular como se comporta react en un simulador 
        result.current.updateKeyword('b') 
        result.current.updateKeyword('ba') //ejecutamos dos cambios

    })
    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2) //probamos que los cambios si se ejecuten correctamente
})