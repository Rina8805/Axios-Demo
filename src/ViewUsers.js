import axios from "axios";
import { useState } from "react";


function ViewUsers()
{
    const[users,setUsers] = useState([]);
    function onGetData()
    {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
                       console.log(response.data)
                       setUsers(response.data)
    })
    .catch(error=>alert("Something went wrong"));
    }

    return <div>
           <h1>All Users...!</h1>

           <table border={1} align="center">
            <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email-Id</th>
            </tr>
            </thead>

            <tbody>
              {
                   users.map((emp,index)=>{
                          return <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.username}</td>
                            <td>{emp.email}</td>
                          </tr>
                   })
              }
            </tbody>
           </table>
           <button onClick={onGetData}>Get Users</button>
    </div>
}

export default ViewUsers;