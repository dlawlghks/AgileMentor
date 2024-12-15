import React from 'react';
import styled from 'styled-components';

const GoogleLoginButton = () => {
  const handleLoginClick = () => {
    document.location.assign('https://api.agilementor.kr/api/auth/login');
  };

  return (
    <GoogleButton onClick={handleLoginClick}>
      <GoogleImage src="/image/google_login.png" alt="Google logo" />
    </GoogleButton>
  );
};

export default GoogleLoginButton;

const GoogleButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  cursor: pointer;
  color: #000;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const GoogleImage = styled.img`
  width: 189px;
  height: 40px;
`;
