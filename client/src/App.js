import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Lists from './components/Lists';
import CreateProducts from './components/CreateProduct';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <Router>
      <Navbar />

      <div className="p-5">
        <Route exact path="/" render={() => <Lists products={products} />} />
        <Route path="/create" component={CreateProducts} />
        <Route path='/details/:id' render={(props) => <Product {...props} products={products} /> } />
        <Route path='/edit/:id' render={(props) => <UpdateProduct {...props} products={products} />} />
      </div>
    </Router>
  );
}

export default App;
