
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './Components/AllReview/AllReview';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<AllReview></AllReview>}></Route>
        <Route path="/dashboard" ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about'></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
