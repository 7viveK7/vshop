import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

import Login from './pages/Login';

// import {ProtectedRoute} from './components/ProtectedRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.auth.user);


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Router>
      {/* <AuthProvider> */}
        <div className="min-h-screen bg-gray-50">
       { user &&   <Navbar />}
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                     <ProductList />
              </ProtectedRoute>} />
      
            <Route path="/cart" element={<Cart />} />        
            <Route path="/login" element={<Login />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;