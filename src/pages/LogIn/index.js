import { Container, Logo, LogInBtn } from './LogInElements'
import { facebookLogIn } from '../../auth'

const LogIn = () => {
  return (
    <Container>
      <Logo src={require("../../assets/images/facebook-logo-png-38360.png").default} />
      <LogInBtn onClick={facebookLogIn}>Log In</LogInBtn>
    </Container>
  )
}

export default LogIn
