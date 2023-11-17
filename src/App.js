import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
