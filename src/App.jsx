import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';


function App() {

  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/more_info' element={<MoreInfo />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
  )
}

export default App
