import React from 'react'

const Form:React.FC = () => {
  return (
    <div className='form'>
      <form className='form__body'>
        <div className='form__body__header'>
          <h1>Login to your dashboard</h1>
          <h2>Provide details to login to your account</h2>
        </div>
        <div className='form__body__input'>
          <span>
            <label htmlFor=""></label>
            <input type="text" />
          </span>
          <span>
            <label htmlFor=""></label>
            <input type="text" />
          </span>
        </div>
        <div className='form__body__button'>

        </div>
      </form>
    </div>
  )
}

export default Form