import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componet/About/About';
import Footer from './Componet/Footer/Footer';
import Home from './Componet/Home/Home';
import Login from './Componet/Login/Login';
import Order from './Componet/Order/Order';
import PrivateRoute from './Componet/PrivateRoute/PrivateRoute';
import Product from './Componet/Product/Product';
import ProductDetails from './Componet/ProductDetails/ProductDetails';
import Register from './Componet/Rgister/Register';
import Shipping from './Componet/Shipping/Shipping';
import TopNav from './Componet/TopNav/TopNav';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className='app'>       
        <AuthProvider>
        <Router>
          <TopNav></TopNav>
          <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route  path="/shop" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/shipping" element={<PrivateRoute><Shipping/></PrivateRoute>}/>
          <Route path="/Order" element={<PrivateRoute><Order/></PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route  path="/products/:productId" element={<ProductDetails/>}/>
          </Routes>
          <Footer></Footer>              
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
