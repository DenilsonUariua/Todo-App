import './App.css'; 
import React from 'react' 
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Create from './components/Functions/Create'
import Read from './components/Functions/Read'
import Update from './components/Functions/Update'
import { Home } from './components/Home/Home';

function App() {
  return (
    
    <Router>
      <Link to='/'>
      <button class="ui inverted purple button">Home</button>      </Link>
      <div className="container">
      
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/create' element={<Create/>}/>
          <Route exact path='/read' element={<Read/>}/>
          <Route exact path='/update' element={<Update/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
