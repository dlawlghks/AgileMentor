import React from 'react';
import styled from 'styled-components';

const GoogleLoginButton = () => {
  const handleLoginClick = () => {
    const googleOAuthURL = 'https://api.agilementor.kr/api/auth/login';

    // 브라우저가 직접 리디렉션 처리
    document.location.href = googleOAuthURL;
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
  width: 160px;
  height: 40px;
`;
