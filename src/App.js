import React,{useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { MyComponentTable} from './MyComponentTable';
import image from './peterkay.jpg';

const styles = {
  width: '100%',
  height: '800px',
  color: 'white',
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
    
  };

function App() {

  const[responseData, setResponseData] = useState([]);
  
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Leeds&appid=9e7197e0387478c28d10e20e205505dd")
    .then(response => response.json())
  .then(data => setResponseData(data));
  },[]);

  function viewData(City) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=9e7197e0387478c28d10e20e205505dd`)
    .then(response => response.json())
  .then(data => setResponseData(data));
  }

    
  const city = responseData.name ? responseData.name: null;

  const temp = responseData.main ? responseData.main.temp: null;

  const humidity = responseData.main ? responseData.main.humidity: null;

  const wind = responseData.wind ? responseData.wind.speed: null;

  const outlook = responseData.weather ? responseData.weather[0].description: null;

  var i = temp - 273.15;
  
  var celsius = Math.round(i);

  


  return (
    <div className="App">
      <header className="App-header"><link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
  />
      </header>

      <div style = {styles}>
        <br />
        <h1>Is it spitting?</h1>
        <br /> 
        <br />
        <br />  
        <br />
        <br />   
        <br />
        <br />
        <br />
        <br />  
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Click below to find out if everyone needs to go in where you are today!</h3>
        <br />
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                LOCATION
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={ ()=>viewData("Leeds") }>Leeds</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={ ()=>viewData("Manchester") }>Manchester</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={ ()=>viewData("London") }>London</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>

      <MyComponentTable city = {city} temp = {celsius} humidity= {humidity} wind = {wind} outlook = {outlook} />



    </div>
  );
}

export default App;
