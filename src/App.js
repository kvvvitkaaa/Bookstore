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

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/login" element={<Authorization />} />
          <Route path="/" element={<Catalog />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/cart" element={<Cart />}    />
        </Routes>
        
        <Footer />
      </div>  
    </Router>
  );
}

export default App;
