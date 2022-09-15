import '../../styles/App.scss'
import { MainPage, Products, Admin, Login } from '../pages';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import RouteGuard from '../RouteGuard';
import Footer from '../footer/Footer';

import {history} from '../../helpers/history.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/admin' element={<RouteGuard />}>
            <Route exact path='/admin' element={<Admin />}/>
          </Route>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
