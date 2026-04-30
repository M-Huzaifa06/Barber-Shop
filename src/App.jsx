import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import Branches from './components/pages/BranchesPage'
import About from './components/pages/About'
import BookAppointment from './components/pages/BookAppointment'
import Login from './components/pages/Login'
import Barbers from './components/pages/Barbers'
import ServicesPage from './components/pages/ServicesPage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/booking" element={<BookAppointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/services/all" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
