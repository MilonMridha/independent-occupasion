
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';

import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
