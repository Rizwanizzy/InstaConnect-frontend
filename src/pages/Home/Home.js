import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../action/authentication/logoutAction';
// import Login from '../Login/Login';
import { Navigate } from 'react-router';
// import styled from 'styled-components';
import Sidenav from '../../navigation/Sidenav';
import Timeline from '../../timeline/Timeline';
import './Home.css'

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #fafafa;
// `;

// const Container = styled.div`
//   background-color: white;
//   border: 1px solid #dbdbdb;
//   border-radius: 5px;
//   width: 400px;
//   padding: 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// // const ProfileImage = styled.img`
// //   width: 40px;
// //   height: 40px;
// //   border-radius: 50%;
// // `;

// const LogoutButton = styled.button`
//   background-color: black;
//   border: none;
//   cursor: pointer;
//   color: #ffff;
//   font-weight: bold;
// `;

const Home = ({ logout }) => {
  const [navigate, setNavigate] = useState(false);

  const logout_user = () => {
    console.log('button clicked')
    logout();
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    // <Wrapper>
    //   <Container>
    //     <Header>
    //       <h1>Instagram</h1>
    //       
    //     </Header>
    //     <p>Welcome to Instagram! Connect with friends and the world around you.</p>
    //     {localStorage.getItem('access') ? (
    //       <div>Your Instagram Feed Goes Here</div>
    //     ) : (
    //       <Login />
    //     )}
    //   </Container>
    // </Wrapper>
    <div className="homepage">
      <div className="homepage__nav">
      {localStorage.getItem('access') && (
            // <LogoutButton onClick={logout_user}>Logout</LogoutButton>
            <button className='logoutButton' onClick={logout_user}>Logout</button>
          )}
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(Home);
