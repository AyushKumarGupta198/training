import React from 'react'
import Form from '../components/Forms/Form'
import RHForm from '../components/Forms/ReactHookForm'


function Login() {
  return (
    <div className='form'>
        <h1>Login Form</h1>
        {/*<Form/>*/}
        <RHForm/>
    </div>
  )
}

export default Login