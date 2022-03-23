import { Link } from 'react-router-dom';
import React, {useEffect,useState} from 'react'
import axios from 'axios'
const Update = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [ID, setID] = useState(null)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstname(localStorage.getItem('First Name'))
        setLastname(localStorage.getItem('Last Name'))
        setCheckBox(localStorage.getItem('Checkbox Value'))
        
    },[])

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://62389cd90a54d2ceab780186.mockapi.io/eplan/${ID}`,{
            firstname,
            lastname,
            checkBox
        })
    }
    
  return (
        <form class="ui form">
          <div class="field">
                <label className='label-header'>Todo</label>
                <input type="text" value={firstname} name="first-name" placeholder="Todo Name" onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div class="field">
                < textarea value={lastname} name="last-name" placeholder="Description" onChange={(e) => setLastname(e.target.value)}/>
            </div> 
             <Link to='/read'>            
                <button class="ui button" type="submit" onClick={updateAPIData}>Update</button>
            </Link>
             <Link to='/read'>            
             <button class="negative ui button">Back</button>            </Link>
        </form>  
    )
}

export default Update