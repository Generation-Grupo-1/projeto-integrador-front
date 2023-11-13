import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import Header from './components/header/Header';
import Apostilas from './pages/apostilas/Apostilas';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
   
    <AuthProvider>
      <BrowserRouter>
          <Navbar />
            <Header />
              <div className='min-h-[80vh] bg-gray-300 '>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/apostilas" element={<Apostilas />} />
              </Routes>
            </div> 
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    
  );
}

export default App;