import React,{useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import image from './weatherpics.jpg';

const table = {
  marginLeft: '20%',
  marginRight:'20%'
};

const weather = {
  width: '100%',
  height: '800px',  
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
    
  };

export function MyComponentTable(props) {
  
    


  return (
    <div style = {weather}>
      <br />
      <br />
      <br />
      

      

      <div style = {table}>
            
        <Table striped bordered hover variant="dark" >
        
            <tbody >
                <tr>
                <td>1</td>
                <td>City</td>
                <td>{props.city}</td>
                    
                </tr>
                
                <tr>
                <td>2</td>
                <td>Temperature (°C)</td>
                <td>{props.temp}</td>
                </tr>
                
                <tr>
                <td>3</td>
                <td>Humidity</td>
                <td>{props.humidity}</td>
                </tr>

                <tr>
                <td>4</td>
                <td>Wind Speed</td>
                <td>{props.wind}</td>
                </tr>

                <tr>
                <td>5</td>
                <td>Outlook</td>
                <td>{props.outlook}</td>
                </tr>

            </tbody>
        </Table>

        </div>

    </div>
  );
}
