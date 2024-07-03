
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Help from './components/Help/Help'
import Navbar from './components/Navbar/Navbar'
import Offer from './components/Offer/Offer'
import Service from './components/Service/Service'
import Stat from './components/Stat/Stat'
import Testimonial from './components/Testimonial/Testimonial'
import { TbLoader3 } from "react-icons/tb";

function App() {
  const [loader, setLoader] = useState('true');
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [])

  if (loader) {
    return <div className='h-screen flex justify-center items-center'> <TbLoader3 size={35} className='animate-spin'/></div>
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <Stat />
      <Help />
      <Service />
      <Testimonial />
      <Faq />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
