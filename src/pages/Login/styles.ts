import styled from 'styled-components'

export const LoginContainer = styled.div`
  padding: 100px 0;
`

export const LoginButton = styled.button`
  background-color: whitesmoke;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 400px;
  padding: 20px 0;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;
  cursor: pointer;
`

export const ProviderLogo = styled.img`
  width: 48px;
  margin-right: 20px;
`

export const SignInText = styled.span`
  font-family: 'bold';
  font-size: 18px;
  color: #555;
`

export const InfoMessage = styled.h2`
  font-family: 'bold';
  background-color: #0B3DF1;
  color: white;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  margin: 30px auto;
  text-align: center;
`

export const ErrorMessage = styled.h2`
  font-family: 'bold';
  background-color: #CB2323;
  color: white;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  margin: 30px auto;
  text-align: center;
`
