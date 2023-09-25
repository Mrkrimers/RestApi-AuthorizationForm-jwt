import routesProvider from './RoutesProvider/routesProvider'
import useAuth from './hooks/useAuth'

function App() {
  const { token } = useAuth()
  const route = routesProvider(!!token)


  return (
    <>
      {route}
    </>
  )
}

export default App
