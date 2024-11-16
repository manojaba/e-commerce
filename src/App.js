import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './ecommerce/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
