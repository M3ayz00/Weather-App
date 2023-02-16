import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [data,setData]=useState({});
  const [location,setLocation]=useState('');
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b7b31431c67b4014bfa5b1319e23fb94` ;
  
  const searchLocation =(event)=> {
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }
    
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='search'>
          <input 
          type="text"
          value={location}
          onChange={event=>setLocation(event.target.value) }
          onKeyDown={searchLocation}
          placeholder="Enter Location..."
          />
        </div>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className='bottom'>
            <div className='feels'>
              {data.main? <p>{data.main.feels_like}°F</p> : null}
            </div>
            <div className='humidity'>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className='wind'>
              {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
