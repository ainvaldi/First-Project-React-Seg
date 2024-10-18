import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './components/MyButton'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import { Menubar } from 'primereact/menubar'
import CreateUser from './components/Users/CreateUser'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  const items = [
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' },
    { label: 'Nuevo usuario', icon: 'pi pi-user-plus', url: '/nuevo-usuario' },
    { label: 'Inicio', icon: 'pi pi-home', url: '/' },
  ]

  return (
    <BrowserRouter>
      <Menubar model={items} />
      <Routes>
        <Route path='/usuarios' element={<UsersContainer />} />
        <Route path='/nuevo-usuario' element={<CreateUser />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
