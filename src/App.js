import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users' //replaced UserItem
import Search from './components/users/Search'

import axios from 'axios'
import './App.css';


export default class App extends Component {
  state = {
    users: [],
    loading: false
  }
  // async componentDidMount() {
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   //change state 1.
  //   this.setState({loading: true})
  //   //request to the github api 2.
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   //after the request we want our data to load and loading be false 3.
  //   this.setState({users: res.data, loading: false})
  // }
//Search Github users
  searchUsers = async text => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //after the request we want our data to load and loading be false 3.
    this.setState({ users: res.data.items, loading: false })
  }
  //Clear users from state
  clearUsers = () => this.setState({users: [], loading: false})

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon='fab fa-github' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false}/>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}



