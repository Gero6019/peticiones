import { useEffect, useState } from 'react'
import './App.css'

// Hacer una peticion a esta api https://fakestoreapi.com/users
// Y extraer el Nombre, correo y telefono de cada usuario registrado.
// Mostrar por pantalla estos datos.

function App() {
  const [productos, setProductos] = useState([])

  const obtenerDatos = async ()=>{
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    setProductos(data)
  }

  useEffect(()=>{
    obtenerDatos()
  },[])

  if(productos.length == 0){
    return <h1>Cargando...</h1>
  }

  return (
    <>
      <h1>Productos</h1>
      {productos.map((element,index)=>{
        return <div key={index}>
            <h3>{element.title}</h3>
            <img src={element.image} height={200} alt="" />
        </div>
      })}
    </>
  )
}

export default App
