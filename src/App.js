import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route  path="/books/:id" element={<BookInfo books={books} />} />
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
