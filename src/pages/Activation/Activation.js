import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { activation } from '../../action/authentication/activationActions'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { useParams } from 'react-router'

const Wrapper = styled.div `
display : grid;
grid-column-gap : 0;
grid-row-gap : 0;
grid-template-columns : repeat(12, 1fr);
`
const Div= styled.div`
grid-column-start:1;
grid-column-end: 13;
display:flex;
align-items:center;
flex-direction: column ;
`
const H2 = styled.h2`
font-family:"Style Script";
color:black;
font-size:40px;
`
const InnerDiv = styled.div`
display: flex;
align-items:center;
flex-direction:column;
width:300px;
padding:30px;
margin-top:50px;
background-color:white;
border 1px solid #ECECEC;
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
const H4 = styled.h4`
color:black;
font-size:20px;
padding:0;
margin:0;
`

const ErrorDiv = styled.div`
grid-column-start:1;
grid-column-end: 13;
width:300px;
text-align:center;
color:red;
font-size:14px;
margin-top:5px;
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
margin-top:20px;
font-family:Roboto Medium
`
const Img = styled.img`
width:100px;
margin-bottom:5px;
`

const Activation = ({activating,activation,isActivated,errMsg}) => {
  const {uid,token} =useParams()
  
  const activate = e =>{  
    activation(uid,token)
  }
  return (
    <Wrapper>
      <Div>
        <InnerDiv>
          <Img src={logo} alt='password Reset'/>
          <H2>Instaconnect</H2>
          <H4>Please verify the Account</H4>
          <Button type='submit' onClick={activate}>{activating? <Spinner/>:'Verify'}</Button>
          {isActivated && <Navigate to='/login'/>}
          <ErrorDiv>
            {errMsg && errMsg.detail === "Stale token for given user." && <div>User is already verified go to 
              <Link style={{textDecoration:'none' , fontSize:'14px' , fontFamily:'Roboto Medium'}}>Login</Link></div>}
          </ErrorDiv>
        </InnerDiv>
      </Div>
    </Wrapper>
    
  )
}

const mapStateToProps = state =>{
  return{
    activating : state.activationReducer.activating,
    isActivated : state.activationReducer.isActivated,
    errMsg : state.errorReducer.msg,
  }
}

const mapDispatchToProps={
  activation : activation
}

export default connect(mapStateToProps,mapDispatchToProps)(Activation)