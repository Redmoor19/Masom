import '../../styles/App.scss'
import { MainPage, Products } from '../pages';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
