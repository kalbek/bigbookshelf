import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/home/Home";
import Books from "./components/pages/Books";
import Categories from "./components/pages/Categories";
import Header from "./components/Header";
import "./App.css";

const App = () => (
  <>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
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
