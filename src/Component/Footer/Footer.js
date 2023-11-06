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
        <img src={emailLogo} alt={'email-logo'}/>
        <div className='travel-text'>
          <div className={'bold-text'}> <strong>Your Travel Journey Starts Here</strong></div>
          <div className={'not-bold'}>Sign Up and we will send the best deals to you</div>
        </div>
        <div className={'email'}>
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
          disabled={email.error}
        >
          Subscribe
        </button>
        {buttonClicked && <span>Subscribed</span>}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer
