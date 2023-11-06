import React, { useState } from 'react'
import emailLogo from '../../asset/images/icons8-email-50.png'
function Footer() {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [buttonClicked, setButtonClicked] = useState(false)

  function handleChange( e ) {
    const { value } = e.target
    let emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (value && value !== '' && emailRegex.test(value)) {
      setEmail({ value, error: '' })
    } else {

      setEmail({ email: '', error: 'email is invalid' })
    }
  }

  function handleButton() {
    setButtonClicked(true)
    setTimeout(() => {
      setButtonClicked(false);
      setEmail({ value: '', error: '' })
    }, 2000)
  }

  return (
    <div className='footer'>
      <div className='email-trigger'>
        <span>Your Travel Journey Starts Here</span>
        <div>Sign Up and we will send the best deals to you</div>
        <img src ={emailLogo} alt={'email-logo'} />
        <input
          type={'text'}
          className={'email'}
          placeholder={"Enter Your Email"}
          onChange={( e ) => handleChange(e)}
          value={email.value}
        />
      </div>
      {email?.error && <span className={'error'}>{email.error}</span>}
      <button
        type={'button'}
        className={'sub-button'}
        onClick={handleButton}
      >
        Subscribe
      </button>
      {buttonClicked && <span>Subscribed</span>}
      <div>

      </div>
    </div>
  )
}

export default Footer
