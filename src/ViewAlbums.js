import { useState } from "react";
import axios from "axios";
import './Home.css'

function ViewAlbums()
{
    
    const[albums,setAlbums] = useState([]);
      axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response=>{
                       console.log(response.data)
                       console.log(response.status)
                       setAlbums(response.data)
      })
   

   return <div className="grid">
    { 
          albums.map(
            (album,index)=>{
                 return <div className="card">
                   
                    <h1>Id: {album.id} &nbsp; User-Id: {album.userId}</h1>
                    <h2>Title: {album.title}</h2>
                    </div>
            })
           
    }

     </div>
    

}

export default ViewAlbums;