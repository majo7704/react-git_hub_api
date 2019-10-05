import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('')
  
  
  const onSubmit = (e)=> {// use arrow func to avoid binding this
    e.preventDefault();
    if (text === "") {
      setAlert('Please enter name', 'light');
    } else {
      searchUsers(text)
      setText('')
    }
    
  }

  const onChange = (e) => {
    setText(e.target.value) //text
  }    
    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input type="text" name="text" value={text} onChange={onChange} placeholder="search users..." />
          <input type="submit" value="search" className="btn btn-dark btn-block"/>
        </form>
        {showClear &&
          (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
      </div>
    )
  
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
