import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function UserItem({ user: { avatar_url, login, html_url } }) { //const UserItem = () =>{}
  //distractoring
  //no more this because props are passed
  return (
    <div className='card text-center'>
      <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}