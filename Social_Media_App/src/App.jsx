import { useState } from 'react'
import Routing from './Routes'
import './App.css'
import Navbar from './Componet'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar/>
       <Routing></Routing>
      </div>
      
  )
}

export default App