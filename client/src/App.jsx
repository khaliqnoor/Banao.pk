import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact.jsx'
import RegisterUser from './pages/RegisterUser.jsx'
import ViewSuppliers from './pages/ViewSuppliers.jsx'
import ViewProfile from './pages/ViewProfile.jsx'

function App() {
 const {user} = useUser()

  return (
    <>
     <Routes>
      <Route path='/' element={!user ? <Login /> : <Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register-supplier' element={<RegisterUser />} />
      <Route path='/view-suppliers' element={<ViewSuppliers />} />
      <Route path='/view-suppliers/profile' element={<ViewProfile />} />
     </Routes>
    </>
  )
}

export default App
