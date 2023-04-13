
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Posts from './components/Posts/Posts';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';
import ErrorPage from './components/ErrorPage/ErrorPage';

import './App.css';

function App() {
  return (
    <div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/blog' element={<Blog />}/>
				<Route path='/posts' element={<Posts />}/>
				<Route path='/posts/:id' element={<Post />}/>
				<Route path='*' element={<ErrorPage />}/>
			</Routes>
    </div>
  );
}

export default App;
