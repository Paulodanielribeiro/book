import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #3CC790;
  padding: 30px 20px;
  align-items: center;
`

export const AppTitle = styled.h1`
  color: whitesmoke;
  font-family: 'bold';
  margin: 0;
`

export const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 20px 0 auto;
`

export const ProfileName = styled.span`
  font-family: 'bold';
  color: whitesmoke;
  font-size: 18px;
  margin-right: 20px;
`

export const SignoutButton = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: #34B5BB;
`
