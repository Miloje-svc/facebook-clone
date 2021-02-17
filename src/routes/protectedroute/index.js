import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector(state => state.user)

  return (
    <Route {...rest}
      render={props => (
        user ? <Component {...rest} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )} />
  )
}

export default ProtectedRoute