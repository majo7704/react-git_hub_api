import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({ icon, title })=> { //class component changed to functional one
  //this deleted since props are passed in functional component
   
  return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}/>
          { title}
        </h1>
      </nav>
    )
  }

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default Navbar;