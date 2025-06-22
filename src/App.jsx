import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'

function App() {


  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className='min-h-screen max-w-full md:mx-30 mx-10 px-4 py-6 font-primary'>
          <Outlet/>
        </main>
        <Footer />
      </AuthProvide>
    </>
  )
}

export default App


// ctrl + alt + f = format code
// ctrl + k + d = format document
// ctrl + k + s = show shortcuts
// ctrl + k + x = show extensions
// ctrl + k + i = show hover
// ctrl + k + o = show output
// ctrl + k + u = show problems
// ctrl + k + r = show references
// ctrl + k + e = show errors
// ctrl + k + m = show markdown
// ctrl + k + z = show zen mode
// ctrl + k + y = show settings
// ctrl + k + j = show json
// ctrl + k + l = show language
// ctrl + k + h = show history
// ctrl + k + p = show preview
// ctrl + k + t = show terminal
// ctrl + k + v = show version
