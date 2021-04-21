import React from 'react'
import {useParams} from 'react-router-dom'

const User_id = () => {
          //console.log(useParams());
          const {id} = useParams();

const [users, setUsers] = React.useState([])

     React.useEffect(() =>{
               fetchData()
     }, [])

     const fetchData = async () =>{
               const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
               const myUsers = data.json()
               setUsers(myUsers)
     }




          return ( 
                    <div className="container">
                    <h1>La parte de User_id</h1>
                                <ul>
                                              {
                                                        users.map(item => (
                                                                  <li key={item.id}>{item.name}</li>
                                                        ))
                                              }  
                                       </ul>
                             
                    </div>
           );
}
 
export default User_id;