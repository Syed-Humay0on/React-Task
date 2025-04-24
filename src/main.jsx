import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import MyNav from './nav'
// import Example from './profile'
import './index.css'
// import ShowImage from './showImage'
import Banners from './Banner'
import Navbars from './Navbar'


export default function App() {
  return (

    <>
      <Banners></Banners>
      <Navbars></Navbars>

      <div className="dark: bg-gray-400 text-white pl-56 pr-56 mt-6 mb-6 ml-40 mr-40 justify-center content-center text-center">
        I am a User Experience based in Seattle. WA. I graduated with a BFA in Communication Design & Technology from Parsons the New School for Design in NYC.

        As a User Experience Designer, I aim to create simple, meaningful designs through user research and designing with intention.
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>,
)
