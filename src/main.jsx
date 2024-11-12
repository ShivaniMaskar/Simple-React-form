import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Navigation from './Components/Navigation/Navigation.jsx'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Navigation/>

<main className="main_class">
<ContactHeader/>
<ContactForm/>
</main>

  </StrictMode>,
)
