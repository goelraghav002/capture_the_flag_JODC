import { Route, Routes } from 'react-router-dom';
import './assets/css/bootstrap4-neon-glow.min.css';
import './assets/css/main.css';

import About from './pages/About';
import Error from './pages/Error';
import Hackerboard from './pages/Hackerboard';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Login from './pages/Login';
import Quests from './pages/Quests';

function App() {

  

	return (
    <div className='main'>
      


			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/hackerboard' element={<Hackerboard />} />
				<Route path='/login' element={<Login />} />
				<Route path='/instructions' element={<Instructions />} />
				<Route path='/quests' element={<Quests />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
