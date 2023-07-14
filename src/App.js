import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Footer, Home, Navbar, Products, Product, Cart, Login, Register, Contact } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products/' element={<Products />} />
          <Route exact path='/products/:id' element={<Product />} />
          <Route exact path='/cart/' element={<Cart />} />
          <Route exact path='/login/' element={<Login />} />
          <Route exact path='/register/' element={<Register />} />
          <Route exact path='/contact/' element={<Contact />} />
        </Routes>
        <Footer />


    </>
  );
}

export default App;
