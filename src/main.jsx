import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import MyNav from './nav'
// import Example from './profile'
import './index.css'
// import ShowImage from './showImage'
import Banners from './Banner'
import Navbars from './Navbar'
import Jumbotron from './jumbotron'


export default function App() {
  return (

    <>
      <Banners></Banners>
      <Navbars></Navbars>
      <Jumbotron></Jumbotron>

      <div style={{ fontFamily: "'DIN Condensed', sans-serif"}} className="text-gray-900 pl-56 pr-56 mt-6 mb-6 ml-40 mr-40 justify-center content-center text-center">
        
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>,
)
