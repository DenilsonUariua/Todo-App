import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [APIData, setAPIData] = useState([]);

    //Is called when the browser loads
    //Gets data from the API
    useEffect(() => {        
        axios.get(`https://62389cd90a54d2ceab780186.mockapi.io/eplan`)
        .then((response) =>{
            setAPIData(response.data);
        })
    }, [])

    //Stores the data to the browsers local storage
    const setData =(data) => {
        let {id, firstname, lastname, checkBox} = data;
        localStorage.setItem('ID',id)
        localStorage.setItem('First Name',firstname)
        localStorage.setItem('Last Name',lastname)
        localStorage.setItem('Checkbox Value',checkBox)
    }

    //Deletes a item at a given id
 const onDelete =  (id)  => {
        axios.delete(`https://62389cd90a54d2ceab780186.mockapi.io/eplan/${id}`)
    }

  return (
      
    <table class="ui celled table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Description</th>
            <th>Edit/ Delete</th>
            </tr>
        </thead>
        <tbody>
            {APIData.map((data) => {
            return( 
            <tr>
                <td>{data.id}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>
                <Link to='/update'>
                    <i class="pen icon" onClick={() => setData(data)}></i>
                </Link>
                <Link to='/read'>
                    <i class="trash alternate icon" onClick={() => onDelete(data.id)}></i>                
                </Link>
                </td>
            </tr>
            )})}
        </tbody>
    </table>  
    )
}

export default Read