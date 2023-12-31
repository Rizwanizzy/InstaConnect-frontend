import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.png'

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
const Img = styled.img`
width:100px;
margin-bottom:5px;
`
const H2 = styled.h2`
font-family:"Style Script";
color:black;
font-size:40px;
`
const H3 = styled.h3`
color:black;
padding:0;
margin:5px;
text-align:center;
`
const H4 = styled.h4`
color:black;
padding:0;
margin:5px;
text-align:center;
`

const Activate = () => {
  return (
    <Wrapper>
      <Div>
          <InnerDiv>
          <Img src={logo} alt="" />
          <H2>Instaconnect</H2>
          <H3>please verify account</H3>
          <H4>An activation link has been sent to your email</H4>
        </InnerDiv>
      </Div>
    </Wrapper>
  )
}

export default Activate
