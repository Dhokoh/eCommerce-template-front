//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UniversalContainer from './assets/components/UniversalContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UniversalContainer />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='products' element={<Products />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
