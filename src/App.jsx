import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
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
