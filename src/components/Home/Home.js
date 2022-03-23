import React from 'react'
import { Link } from 'react-router-dom'
//import './Table.css'
export const Home = () => {
  return (
    <div>
      <Link to='/create'>
      <button class="ui green button">Enter A Todo</button>
      </Link>
      <Link to='/read'>
      <button class="ui blue button">See List Of Todos</button>
      </Link>
    </div>
  )
}
