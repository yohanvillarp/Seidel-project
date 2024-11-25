import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
          <main className="app__main">
            <Routes>
              <Route path="/" element=  {<HomeView />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
