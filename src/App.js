
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Header/Footer/Footer';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
