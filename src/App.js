import React, { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users' //replaced UserItem
import User from './components/users/User'
import About from './components/pages/About'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import './App.css';


const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


//Search Github users
  const searchUsers = async text => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //after the request we want our data to load and loading be false 3.
    setUsers(res.data.items)
    setLoading(false)
  }
//Get a single User
  const getUser = async (username) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setUser(res.data)
    setLoading(false)
  }
  //Get users repos
  const getUserRepos = async (username) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setRepos(res.data)
    setLoading(false)
  }

  //Clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  
  //setAlert 
  const showAlert = (msg, type) => {
    setAlert({msg, type})

    setTimeout(() => setAlert(null), 4000)
  }

    return (
      <div className="App">
        <Navbar title="Github Finder" icon='fab fa-github' />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={showAlert}/>
                <Users loading={loading} users={users} />
              </>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading}/>
            )}/>
          </Switch>
        </div>
      </div>
    )
  
}


export default App
