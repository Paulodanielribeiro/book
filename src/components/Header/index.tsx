import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { getAuth } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import firebaseApp from '../../config/firebase'
import { AppTitle, HeaderContainer, ProfileName, ProfilePic, SignoutButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const {
    userName, 
    profilePic, 
    setProfilePic,
    setToken,
    setUserName,
  } = useContext(UserContext)
  const navigate = useNavigate()

  const doSignout = () => {
    const auth = getAuth(firebaseApp)
    auth.signOut()
    .then(()=> {
      setToken('')
      setUserName('')
      setProfilePic('')
      navigate('/')
    })
    .catch((error)=> console.log(error))
  }
  return(
    <HeaderContainer>
      <AppTitle>Welcome FaceAuth</AppTitle>
      <ProfilePic 
      src={profilePic} 
      alt='Foto do usuário'
       />
      <ProfileName>{userName}</ProfileName>
      <SignoutButton onClick={() => doSignout()}>
        <FontAwesomeIcon icon={faArrowRightFromBracket}
          style={{color: '#fffff'}}
        />
      </SignoutButton>
    </HeaderContainer>

  )
}

export default Header