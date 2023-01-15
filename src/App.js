//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UniversalContainer from './assets/components/UniversalContainer';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UniversalContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
