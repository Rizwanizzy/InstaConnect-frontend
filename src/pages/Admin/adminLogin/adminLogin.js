import React, { useEffect } from 'react'
import { connect,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { adminLogin } from '../../../action/authentication/adminLoginActions';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import loginImage1 from '../../../images/login_image1.png'
import appStores from '../../../images/appstore.png'
import styled from 'styled-components'
import '../../../assets/css/fonts.css'

const Wrapper = styled.div `
display : grid;
grid-column-gap : 0;
grid-row-gap : 0;
grid-template-columns : repeat(12, 1fr);
`

const LeftDiv= styled.div`
grid-column-start:1;
grid-column-end: 7;
display:flex;
align-items:flex-end;
flex-direction: column ;
`
const RightDiv = styled.div`
grid-column-start:7;
grid-column-end:13;
display:flex;
justify-content:center;
flex-direction:column;
@media (min-width:320px) and (max-width:480px){
    grid-column-start:1;
    grid-column-end:13;
  }
`
const Form = styled.form`
display:grid;
grid-column-gap : 0;
grid-row-gap : 0;
grid-template-columns : repeat(12, 1fr);
background-color:white;
padding: 30px;
width:300px;
height:170px;
border-radius:2px;
@media (min-width:320px) and (max-width:480px){
    width:320px;
  }
@media (min-width:411px) {
    width:360px;
  }
`
const FormDiv = styled.div`
grid-column-start:1;
grid-column-end: 13;
display:flex;
justify-content:center;
`
const H2 = styled.h2`
font-family:"Style Script";
color:black;
font-size:40px;
padding:0;
margin:0;
"
`
const Input = styled.input`
padding:10px;
background-color:#FAFAFA;
width:100%;
height:20px;
margin-bottom:5px;
border 1px solid #EDEDED;
`
const Img = styled.img`
width:60%;
height:100%;
@media (min-width:320px) and (max-width:480px){
    display:none;
  }
  @media (max-width:320px) and (max-width:480px){
    display:none;
  }
`
const Button =  styled.button`
display:flex;
justify-content:center;
background-color: #0095F6;
border: none;
color: white;
width:100%;
height:30px;
padding: 5px;
border-radius:5px;
font-size: 16px;
cursor: pointer;
margin-top: 5px;
font-family:Roboto Medium
`
const DisabledButton =  styled.button`
display:flex;
justify-content:center;
background-color: #B2DFFC;
border: none;
color: white;
width:100%;
height:30px;
padding: 5px;
border-radius:5px;
font-size: 16px;
cursor: pointer;
margin-top: 5px;
font-family:Roboto Medium
`
const ErroDiv = styled.div`
grid-column-start:1;
grid-column-end: 13;
width:300px;
text-align:center;
color:red;
font-size:14px;
z-index:1;
`
const SocialMediaDiv = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
width:300px;
padding:30px;
background-color:white;
@media (min-width:320px) and (max-width:480px){
    width:320px;
  }
@media (min-width:411px) {
    width:360px;
  }
`
const ThirdDiv = styled.div`
grid-column-start:1;
grid-column-end: 13;
width:300px;
border-radius:2px;
color:#262626;
font-family:Roboto light;
display:flex;
justify-content:center;
flex-direction:column;
text-align:center;
@media (min-width:320px) and (max-width:480px){
    width:320px;
  }
@media (min-width:411px) {
    width:400px;
  }
`
const Spinner = styled.div `
border: 5px solid #FAFAFA;
border-radius: 50%;
border-top: 5px solid #2596be;
width: 10px;
height:10px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 1s linear infinite;  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
`
let LoginSchema = yup.object().shape({
    email: yup.string().email().required('Enter Email'),
    password:yup.string().required('Enter password')
})
const AdminLogin = ({isLoading, isLoggedIn, errMsg,status,userRole}) =>{
  const dispatch = useDispatch()
  const navigate =useNavigate()
const {register, handleSubmit, formState: { errors, isValid}} =useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange" ,
})
console.log('before onsubmit in adminlogin page')
console.log('userRole:',userRole)
const onSubmit = async (data) => {
    await dispatch(adminLogin(data.email, data.password))

    if (status === 404){
      console.log('user is not registered')
    }
}

useEffect(() =>{
  if ( isLoggedIn ){
    navigate('/adminhome')
  }
},[isLoggedIn,navigate])

if(localStorage.getItem('access')){
    return <Navigate to='/adminhome'/>
}
return (
<Wrapper>
    <LeftDiv>
        <Img src={loginImage1} alt='login Image'/>
    </LeftDiv>
    <RightDiv>
        <Form onSubmit = {handleSubmit(onSubmit)}>
                <FormDiv>
                    <H2>Admin Instaconnect</H2>
                </FormDiv>
                <FormDiv>
                    <Input type= 'email' {...register("email")} placeholder = 'Email' />
                </FormDiv>
                <FormDiv>
                    <Input  type='password' {...register("password")} placeholder = 'password'/>
                </FormDiv>
                <FormDiv>
                    {isValid ? <Button type='submit'>{isLoading?<Spinner/>:'Log In'}</Button>:<DisabledButton>Log In</DisabledButton>}
                    {isLoggedIn && <Navigate to='/adminhome'/>}
                </FormDiv>
            <ErroDiv>
                   {errors.email && <p> {errors.email.message} </p>} 
                   {errors.password && <p>{ errors.password.message } </p>}
                   {/* {errMsg && <p>{ errMsg.non_field_errors[0] }</p>} */}
                   {status === 400 && 'Email or Password is Incorrect'}
                   {status === 404 && 'User is not registered'}
            </ErroDiv>
        </Form>
        <SocialMediaDiv>
            <FormDiv>
                <Link to='password-reset' style={{ textDecoration: 'none', fontSize:'12px', color:'#00376B', marginTop:'5px' }}>Forgot Password?</Link>
            </FormDiv>
        </SocialMediaDiv>
        <ThirdDiv>
            <p>Get the app.</p>
            <img style={{ width:'300px', marginLeft:'30px'}} src={appStores} alt='Get the app'/>
        </ThirdDiv>
    </RightDiv>
</Wrapper>
)
}
const mapStateToProps = state => {
    return {
        isLoading: state.adminLoginReducer.isLoading,
        isLoggedIn: state.adminLoginReducer.isLoggedIn,
        errMsg: state.errorReducer.msg,
        status: state.errorReducer.status,
        errStatus: state.errorReducer.status,
        userRole:state.adminLoginReducer.userRole
    }
}
const mapDispatchToProps = {
  adminLogin:adminLogin,
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
