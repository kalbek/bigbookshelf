import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import Header from './components/Header';
import './App.css';

const App = () => (
  <>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Books />} />
            <Route element={<Header />} />
            <Route path="/categories" element={<Categories />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
);

export default App;
