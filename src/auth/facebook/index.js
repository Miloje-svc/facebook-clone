import { auth, facebookProvider } from '../../firebase'

const facebookLogIn = () => {
  auth.signInWithPopup(facebookProvider)
    .catch(err => console.log(err.message))
}

export default facebookLogIn