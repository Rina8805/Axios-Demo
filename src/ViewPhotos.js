import { useState } from "react";
import axios from "axios";
import './Home.css'

function ViewPhotos()
{
    const[photos,setPhotos] = useState([]);
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response=>{
                     console.log(response.data)
                     console.log(response.status)
                     setPhotos(response.data)
    })

return <div className="grid">
{ 
      photos.map(
        (photo,index)=>{
             return <div className="card">
               
                <h1>Album-Id: {photo.albumId} &nbsp; Id: {photo.id}</h1>
                <h2>Title: {photo.title}</h2>
             {/* <td>Url : {photo.url}</td>  */}
                <td> <img src={photo.url} height="auto" width='250px'/> </td>
                
                
              
                
                </div>
        })
       
}


</div>

}
export default ViewPhotos;