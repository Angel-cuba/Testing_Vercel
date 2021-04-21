import React, { useState } from 'react'

const Nosotros = () => {

          const [equipo, setequipo] = React.useState([])
   React.useEffect(() => {
         document.title= `Angel_React.JS`;
             obtenerDatos()
   }, [])
             
             const obtenerDatos= async () => {
                       const data = await fetch('https://jsonplaceholder.typicode.com/users')
                       const users = await data.json()
                       //console.log(users[5].name);
                       setequipo(users)
             }

          return (
                    <div>
        <h1>Nosotros</h1>
           <ul>
                             {
                               equipo.map(item => (
          <li key={item.id}>{item.name}  - {item.address.geo.lat}        
                      </li>        
                                       ))
                                        }
                              </ul>

                              <ul>
                                { 
                                  equipo.map(item => (
                                      <li key={item.id}>
                                  {item.phone} -{item.website}
                                 </li>
                                  )) 
                                  }
                              </ul>
                    </div>
          )
}

export default Nosotros
