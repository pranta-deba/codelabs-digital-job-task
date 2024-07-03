
import './App.css'
import Banner from './components/Banner/Banner'
import Faq from './components/Faq/Faq'
import Help from './components/Help/Help'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Stat from './components/Stat/Stat'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <div>
      <Navbar />
      <Banner/>
      <Stat/>
      <Help/>
      <Service/>
      <Testimonial/>
      <Faq/>
    </div>
  )
}

export default App
