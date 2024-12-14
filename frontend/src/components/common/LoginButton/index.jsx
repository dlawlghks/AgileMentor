import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleLoginClick = async () => {
    try {
      const response = await axios.get(
        'https://api.agilementor.kr/api/auth/login',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        const { data } = response;
        if (data && data.redirectUrl) {
          // 리디렉션 처리
          document.location.href = data.redirectUrl;
        } else {
          console.error('Invalid response format:', data);
        }
      } else {
        console.error('Failed to initiate login process:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while initiating login process:', error);
    }
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
  width: 140px;
  height: 40px;
`;
