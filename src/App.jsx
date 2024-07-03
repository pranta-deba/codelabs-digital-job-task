
import './App.css'
import Banner from './components/Banner/Banner'
import Help from './components/Help/Help'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Stat from './components/Stat/Stat'

function App() {

  return (
    <div>
      <Navbar />
      <Banner/>
      <Stat/>
      <Help/>
      <Service/>
    </div>
  )
}

export default App
