import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/HomeView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nosotros from './components/Footer/FooterLinks/Nosotros/Nosotros';
import Eventos from './components/Footer/FooterLinks/Eventos/Eventos';
import Privacidad from './components/Footer/FooterLinks/Privacidad/Privacidad';
import Servicios from './components/Footer/FooterLinks/Servicios/Servicios';
import FAQ from './components/Footer/FooterLinks/FAQ/FAQ';


function App() {

  return (
    <Router>
      <MainContent />
    </Router>
  )
}

function MainContent(){

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  console.log(isLoginPage);

  return(
    <div className="app">
        {! isLoginPage && <Header />}
          <main className="app__main">
            <Routes>
              <Route path="/" element=  {<HomeView />} />
              <Route path="/nosotros" element=  {<Nosotros />} />
              <Route path="/servicios" element=  {<Servicios />} />
              <Route path="/privacidad" element=  {<Privacidad />} />
              <Route path="/faq" element=  {<FAQ />} />
              <Route path="/eventos" element=  {<Eventos />} />
            </Routes>
          </main>
        {! isLoginPage && <Footer />}
      </div>
  )
}

export default App
