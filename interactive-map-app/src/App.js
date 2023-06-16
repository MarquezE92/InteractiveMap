import { useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import './App.css';


  

function App() {

  const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY})

  if(!isLoaded) return (
    <div className="App">
      Loading... 
    </div>
  )

  return (
    <div className="App">
      <GoogleMap zoom={10} center={{lat:-38, lng: -57}} mapContainerClassName='map-container'></GoogleMap>
    </div>
  );
}


export default App;
