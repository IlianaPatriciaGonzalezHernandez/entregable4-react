import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteById, setUpdateInfo,  setFormIsClose }) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  return (
    <article className='user'>
        <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user_list'>
            <li className='user_item'><span className='user_span'>Email </span>{user.email}</li>
            <li className='user_item'>
              <span className='user_span'>Birthday </span>
              <div className='user_item-container'>
              <i className="user__gift fa-solid fa-gift"></i> {user.birthday}
              </div>
            </li> 
        </ul>
        <footer className='user_footer'>
          <button className='user__btn' onClick={() => deleteById(user.id)}>
            <i  className="user__trash fa-solid fa-trash-can"></i>
          </button>
          <button className='user__btn' onClick={handleEdit}>
            <i  className="user__ edit fa-solid fa-pencil"></i>
          </button>
        </footer>
    </article>

  )
}

export default UserCard