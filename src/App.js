import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import { Posts, postLoader } from './components/Posts/Posts';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Post from './components/Post/Post';
import Layouts from './components/Layouts/Layouts';
import PrivateRoute from './components/PrivateRoute.jsx/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';

import './App.css';

function App() {



	const router = createBrowserRouter(
		createRoutesFromElements(
				<Route path='/' element={<Layouts />}>
					<Route index element={<Home />} />
					<Route element={<PrivateRoute />}>
						<Route path='blog' element={<Blog />} />
						<Route path='posts' element={<Posts />} loader={postLoader}/>
						<Route path='posts/:id' element={<Post />} />
					</Route>
					<Route path='*' element={<ErrorPage />} />
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
