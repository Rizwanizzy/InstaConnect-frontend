import React,{useState} from 'react'
import {connect} from 'react-redux'
import { signup } from '../../action/authentication'

const Signup = ({isLoading,isSignup,msg,state,signup}) => {
  const [formData,setFormData]=useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  })
  const {first_name,last_name,email,password}=formData
  const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
  const onSubmit = e =>{
      e.preventDefault()
      console.log(first_name,last_name,email,password)
      signup(first_name,last_name,email,password)
  }

  return (
    <div>
      <h1>Signup</h1>
      <h2>Create your Account</h2>
      <form onSubmit={e =>onSubmit(e)}>
        <div>
          <input type="text" placeholder='First Name' name='first_name' value={first_name} onChange={e =>onChange(e)} required/>
        </div>
        <div>
          <input type="text" placeholder='Last Name' name='last_name' value={last_name} onChange={e =>onChange(e)} required/>
        </div>
        <div>
          <input type="email" placeholder='Email' name='email' value={email} onChange={e =>onChange(e)} required/>
        </div>
        <div>
          <input type="password" placeholder='Password' name='password' value={password} onChange={e =>onChange(e)} required/>
        </div>
        <button>Signup</button>
      </form>
    </div>
  )
}
const mapStateToProps = state =>{
  return{
    isLoading:state.signupReducer.isLoading,
    isSignup:state.signupReducer.isSignup,
    msg:state.errorReducer.msg,
    status:state.errorReducer.status
  }
}

const mapDispatchToProps = {
  signup:signup
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
