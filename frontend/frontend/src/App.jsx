
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Regis from './pages/Regis'
import Dashboard from './Dashboard'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>

        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='login/regis' element={<Regis/>}/>
       

        </Route>
      </Routes>

      <Routes>
        <Route path='/dash' element={<Dashboard/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
