import routesProvider from './RoutesProvider/routesProvider'
import MyContext from './context/MyContext'
import useAuth from './hooks/useAuth'

function App() {
  const data = useAuth()
  const route = routesProvider(!!data.token)


  return (
    <>
      <MyContext.Provider value={data}>
        {route}
      </MyContext.Provider>
    </>
  )
}

export default App
