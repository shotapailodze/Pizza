import './App.css'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' exact Component={Menu}/>
          <Route path='/about' exact Component={About}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
