
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Properties from './component/Properties/Properties';
import PropertDetails from './component/PropertDetails/PropertDetails'
import Contact from './component/Contact/Contact'
import SubHeader from './component/SubHeader/SubHeader';
import Header from './component/Header/Header';
function App() {


  return (
    <div className="app">
      <SubHeader />
      <Header />
      <Routes>
        <Route path='/Task1/' element={<Home />} />
        <Route path="/Task1/properties" element={<Properties />} />
        <Route path="/Task1/propertdetails" element={<PropertDetails />} />
        <Route path="/Task1/contact" element={<Contact />} />
      </Routes>
    </div>

  )
}

export default App
