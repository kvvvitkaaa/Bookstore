import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';

import Authorization from './components/authorization/Authorization';
import BookPage from './components/bookpage/Bookpage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Catalog from './pages/Catalog';
import Page404 from './pages/Page404';
import './styles/reset.css';
import './styles/style.css';
import ScrollToTop from './utils/ScrollToTop';
import Cart from './pages/Cart';
import PrivateRoute from './utils/privateRoute';
import { ShopContextProvider } from './context/shopContext';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Authorization />} />
            <Route path="*" element={<Page404 />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Catalog />} />
              <Route path="/book/:id" element={<BookPage />} />
              <Route path="/cart" element={<Cart />}    />
            </Route>
          </Routes>
          <Footer />
        </ShopContextProvider>
      </div>  
    </Router>
  );
}

export default App;
