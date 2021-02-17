/* eslint-disable react-hooks/exhaustive-deps */
import { Switch, Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Home, LogIn } from './pages'
import { useEffect } from 'react'
import { auth } from './firebase'
import ProtectedRoute from './routes/protectedroute'
import ROUTES from './routes'
import TYPES from './state/types'

export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const history = useHistory()

  useEffect(() => {
    user && history.push(ROUTES.HOME)
  }, [user])

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: TYPES.USER,
          user: authUser
        })
      }
    })
  }, [])

  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LogIn} />
      <ProtectedRoute path={ROUTES.HOME} component={Home} />
    </Switch>
  )
}