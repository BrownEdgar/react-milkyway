
import Navbar from './components/Inga/lesson7/Navbar';
import Home from "./components/Inga/lesson7/Home/Home";
import Blog from "./components/Inga/lesson7/Blog/Blog";
import Posts from "./components/Inga/lesson7/Posts/Posts";
import Post from "./components/Inga/lesson7/Post/Post";
import Login from "./components/Inga/lesson7/Login/Login";
import ErrorPage from './components/Inga/lesson7/ErrorPage/ErrorPage';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
			<Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />	}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
   
    </div>
  );
}

export default App;
