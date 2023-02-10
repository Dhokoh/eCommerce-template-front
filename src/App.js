//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UniversalContainer from './assets/components/UniversalContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import CBDoilsAndExtracts from './pages/subpages/products.cbdoilsandextracts';
import CBDointments from './pages/subpages/products.cbdointments';
import THCedibles from './pages/subpages/products.thcedibles';

function App() {
  return (
    <BrowserRouter basename='github.com/Dhokoh/eCommerce5_front/'>
      <Routes>
        <Route path='/' element={<UniversalContainer />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='products/cbd-oils-and-extracts' element={<CBDoilsAndExtracts />}></Route>
          <Route path='products/cbd-ointments' element={<CBDointments />}></Route>
          <Route path='products/thc-edibles' element={<THCedibles />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
