import './App.css';
import ViewUsers from './ViewUsers';
import ViewAlbums from './ViewAlbums';
import ViewPhotos from './ViewPhotos';

function App() {
  return (
    <div className="App">
    <h1>Axios Library...!</h1>

    <ViewUsers/> &nbsp;
    <h1>View Albums...!</h1>
    <ViewAlbums/>
    <h1>View Photos...!</h1>
    <ViewPhotos/>
    </div>
  );
}

export default App;
