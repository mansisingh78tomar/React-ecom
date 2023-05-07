import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Container from './components/Container';
import Layout from './components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import SingleBlog from './Pages/SingleBlog';
import SignUp from './Pages/SignUp';
import Resetpassword from './Pages/Resetpassword';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermAndCondition from './Pages/TermAndCondition';
import SingleProduct from './Pages/SingleProduct';
import Cart from '../src/Pages/Cart';
import Checkout from './Pages/Checkout';


function App() {
  return (
   <>
     <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact/>} />
          <Route path='product' element={<OurStore/>} />
          <Route path='product/:id' element={<SingleProduct/>} />
          <Route path='blogs' element={<Blog/>} />
          <Route path='blog/:id' element={<SingleBlog/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='wishlist' element={<Wishlist/>} />
          <Route path='container' element={<Container/>} />
          <Route path='compare-product' element={<CompareProduct/>} />
          <Route path='login' element={<Login/>} />
          <Route path='forgot-password' element={<Forgotpassword/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='reset-password' element={<Resetpassword/>} />
          <Route path='privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='refund-policy' element={<RefundPolicy/>} />
          <Route path='shipping-policy' element={<ShippingPolicy/>} />
          <Route path='term-conditions' element={<TermAndCondition/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
