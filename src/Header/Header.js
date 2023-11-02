import React, { useEffect, useState } from 'react'
import './Header.css'
import LoginForm from '../Component/LoginForm/LoginForm';
import avatar from '../asset/images/2024644_login_user_avatar_person_users_icon.png'

const PAGE_NAVIGATION = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: 'Categories',
  },
  {
    id: 3,
    name: 'Destination',
  },
  {
    id: 4,
    name: 'Blog',

  },
  {
    id: 5,
    name: 'Pages'
  },
  {
    id: 6,
    name: 'Dashboard',
  },
  {
    id: 7,
    name: 'Contact'
  }
]

function Header() {
  const [registerClicked, setRegisterClicked] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const email = localStorage.getItem('email');
    const passWord = localStorage.getItem('passWord');
    if (email && passWord) {
      setLoggedIn(true)
    }
  }, [])
  const index = localStorage.getItem('email')?.indexOf('@');
  const name = index > -1 && localStorage.getItem('email').substring(0, index);
  return (
    <div className='header'>
      <div className='header-name'> Trip Web</div>
      <div className='static-navigator'>
        {PAGE_NAVIGATION.map(item => <span className='pages'>{item.name}</span>)}
      </div>
      <div className='header-buttons'>
        <button type={'button'} className='expert'>Become An Expert</button>
        {isLoggedIn
          ? <button
            className='login'>
            <img
              src={avatar}
              width={20}
              alt='login-avatar'
              className='avatar-image'
            />
            {name}</button>
          : <button
            type={'button'}
            className='login'
            onClick={() => setRegisterClicked(true)}>
            Sign In/Register
          </button>
        }
        {registerClicked && <LoginForm
          setLoggedIn={( data ) => setLoggedIn(data)}
          setRegisterClicked={(data)=> setRegisterClicked(data)}
        />}
      </div>
    </div>
  )
}

export default Header
