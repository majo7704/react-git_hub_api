import React from 'react'
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Alert from './components/layout/Alert'
import { Switch, Route } from 'react-router-dom'

import GithubState from './context/github/GithubState'
import './App.css';
import AlertState from './context/alert/AlertState'
import './App.css';


const App = () => {
  
  return (
    <GithubState>
      <AlertState>
        <div className="App">
          <Navbar title="Github Finder" icon='fab fa-github' />
          <div className='container'>
            <Alert/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  )
}


export default App
