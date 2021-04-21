import React from 'react'
import { Link } from 'react-router-dom'


 const User = () => {

//console.log(useParams());

//const {id} = useParams()
//console.log(id);

         const [ people, setPeople] = React.useState([])
   React.useEffect(() => {

              const obtenerDatos= async () => {
                       const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
                       const users = await data.json()
                       setPeople(users)
             }

             obtenerDatos()
   }, [])

    return (
                    <div>
                     <h1>Users</h1>   
                                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ea repudiandae? Sequi in expedita blanditiis ex nam animi, ullam consequatur aliquid harum tempore quaerat ipsa voluptatem aut, distinctio, praesentium recusandae.</p>  
                                         <ul>
                                               {
                                                     people.map(item => (
                                                          
                                                         <li key={item.id}>
                                                                 <Link to={`/users/${item.id}`}>{item.name}</Link>
                                                         </li>
                                                     ))
                                               }
                                         </ul>                            
                    </div>
          )      
}

export default User