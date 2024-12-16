import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/HomeView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nosotros from './components/Footer/FooterLinks/Nosotros/Nosotros';
import Guia from './components/Footer/FooterLinks/Guia/Guia';
import Privacidad from './components/Footer/FooterLinks/Privacidad/Privacidad';
import Servicios from './components/Footer/FooterLinks/Servicios/Servicios';
import FAQ from './components/Footer/FooterLinks/FAQ/FAQ';
import Ofertas from './components/Ofertas/Ofertas';
import Productos from './components/Productos/Productos';
import LoginView from './views/LoginView';
import { categorias } from './data/categorias';
import ProductInfoCad from './components/Productos/ProductInfoCard';

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
              <Route path="/:nombreCategoria" element=  {<Productos/> } />
              <Route path="/modelo/:id" element= {<ProductInfoCad />} />
              <Route path="/ofertas" element=  {<Ofertas />} />
              <Route path="/nosotros" element=  {<Nosotros />} />
              <Route path="/servicios" element=  {<Servicios />} />
              <Route path="/privacidad" element=  {<Privacidad />} />
              <Route path="/faq" element=  {<FAQ />} />
              <Route path="/guia" element=  {<Guia />} />
              <Route path="/login" element={<LoginView />} /> 
            </Routes>
          </main>
        {! isLoginPage && <Footer />}
      </div>
  )
}

export default App