import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import {useState} from 'react';

function App() {

const [product, setProduct] = useState([
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.fEHJCw2X9AEGCSdt4xvmIwHaHa&pid=Api&P=0',
    name: 'Tr white shoes',
    category: 'shoes',
    seller: 'AMZ Seller Ghz',
    price: 1234
  },
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.fEHJCw2X9AEGCSdt4xvmIwHaHa&pid=Api&P=0',
    name: 'Tr white shoes',
    category: 'shoes',
    seller: 'AMZ Seller Ghz',
    price: 1234
  },
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.fEHJCw2X9AEGCSdt4xvmIwHaHa&pid=Api&P=0',
    name: 'Tr white shoes',
    category: 'shoes',
    seller: 'AMZ Seller Ghz',
    price: 1234
  },
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.fEHJCw2X9AEGCSdt4xvmIwHaHa&pid=Api&P=0',
    name: 'Tr white shoes',
    category: 'shoes',
    seller: 'AMZ Seller Ghz',
    price: 1234
  },
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.fEHJCw2X9AEGCSdt4xvmIwHaHa&pid=Api&P=0',
    name: 'Tr white shoes',
    category: 'shoes',
    seller: 'AMZ Seller Ghz',
    price: 1234
  },
])

const [cart, setCart] = useState([])
const [showCart, setShowCart] = useState(false)
const addToCart = (data) => {
  setCart([...cart , { ...data , quantity: 1} ])

}
const handleShow = (value) => {
setShowCart(value)
}

  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}></Header>

    {
      showCart ? 
      <CartList cart={cart}></CartList> :
      <ProductList product={product} addToCart={addToCart}></ProductList>
    }

      
    </div>
  );
}

export default App;
