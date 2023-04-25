
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import {Posts,postLoader} from './components/Posts/Posts';
import Post from './components/Post/Post';

import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';

import './App.css';
import Layouts from './components/Layouts/Layouts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			
				<Route path='/' element={<Layouts/>}>
				<Route index element={<Home />}/>
				<Route path='blog' element={<Blog />}/>
				<Route element={<PrivateRoute/>}>
				<Route path='posts' element={<Posts />} loader={postLoader}/>
				<Route path='posts/:id' element={<Post />}/>

				</Route>
				<Route path='login' element={<Login />}/>

				<Route path='*' element={<ErrorPage />}/>
				</Route>
		)
	)
  return (
    <div className="App">
			
		<RouterProvider router={router}/>
	
    </div>
  );
}

export default App;
