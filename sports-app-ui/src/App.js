import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router,Routes, Route,Navigate } from 'react-router-dom'

import Login from './components/Login'
import Search from './components/Search'
import Home from './components/Home'
//import Register from './components/Register'
import UserSearch from './components/UserSearch'
import FavoriteLeague from './components/FavoriteLeague'
import Register from './components/UserRegister'


function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/usersearch' element={<UserSearch />} />
          <Route exact path='/favoriteLeague' element={<FavoriteLeague />} />
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
