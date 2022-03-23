import React,{useState} from 'react'
import axios from 'axios'

const Create = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    
    //Sends the data to the api
    const postData = (e) => {
        e.preventDefault();
                axios.post('https://62389cd90a54d2ceab780186.mockapi.io/eplan',
        { firstname, lastname})
        setFirstname('')
        setLastname('')
    }
    
  return (
    <div>
        <form class="ui form">
            <div class="field">
                <label className='label-header'>Todo</label>
                <input type="text" value={firstname} name="first-name" placeholder="Todo Name" onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div class="field">
                < textarea value={lastname} name="last-name" placeholder="Description" onChange={(e) => setLastname(e.target.value)}/>
            </div>
            <button class="ui button" type="submit" onClick={postData}>Submit</button>
        </form>
    </div>
  )
}

export default Create