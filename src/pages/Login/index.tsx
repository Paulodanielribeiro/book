import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/facebook.png'
import {FacebookAuthProvider, getAuth} from 'firebase/auth'
import {useSignInWithFacebook} from 'react-firebase-hooks/auth'

import { ErrorMessage, InfoMessage, LoginButton, LoginContainer, ProviderLogo, SignInText } from './styles'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import firebaseApp from '../../config/firebase'

const Login = () => {
  const navigate = useNavigate()
  const{setProfilePic,setToken,setUserName,token} = useContext(UserContext)

  useEffect(() => {
    // Ponto de Vulnerabilidade
    if(token){
      navigate('/home')
    }
  })

  const [tokenProvided, setTokenProvided] = useState(true)

  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'

  const [
    signInWithFacebook,
    facebookUserCredentials,
    facebookLoading,
    facebookError,]
   = useSignInWithFacebook(auth)

   if(facebookUserCredentials){
    const credentials = 
    FacebookAuthProvider.credentialFromResult(facebookUserCredentials)

    const token = credentials?.accessToken
    const {user} =facebookUserCredentials
    const userName = user.displayName
    const profilePic = `${user.photoURL}?access_token=${token}`

    if(token){
      setToken(token)
      setUserName(userName || '')
      setProfilePic(profilePic || '')
      navigate('/home')
    }else{
      setTokenProvided(false)
    }

   }

   if(facebookError){
    console.log(facebookError)
    
   }

  return (
   <>
   <LoginContainer>
      <LoginButton onClick={() => signInWithFacebook()}>
        <ProviderLogo src={logo} alt='Facebook' />
        <SignInText>Entrar com Facebook</SignInText>
      </LoginButton>
    </LoginContainer>
      {facebookError && (<ErrorMessage>Erro Ao Tentar Autenticar</ErrorMessage>)}
      {facebookLoading && (<InfoMessage>Certo</InfoMessage>)}
  </>
    
  )
}

export default Login
