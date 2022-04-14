
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from '../src/Pages/Shared/Header/Header'
import Footer from '../src/Pages/Shared/Footer/Footer'
import Services from './Pages/Home/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/services/:ServiceID' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
     <Footer></Footer>
      
    </div>
  );
}

export default App;
