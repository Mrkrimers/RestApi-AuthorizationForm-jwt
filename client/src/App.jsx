import { Route, Routes } from 'react-router-dom'
import SignIn from './Pages/SignInPage/SignIn'
import SignUp from './Pages/SignUpPage/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/auth' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
