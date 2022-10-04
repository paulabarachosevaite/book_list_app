import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewBook from "./pages/NewBook";
import PrivateRoute from "./components/PrivateRoute";
import Books from "./pages/Books";
import Book from "./pages/Book";
import UpdateBook from "./pages/UpdateBook";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-book" element={<PrivateRoute />}>
            <Route path="/new-book" element={<NewBook />} />
          </Route>
          <Route path="/books" element={<PrivateRoute />}>
            <Route path="/books" element={<Books />} />
          </Route>
          <Route path="/book/:bookId" element={<PrivateRoute />}>
            <Route path="/book/:bookId" element={<Book />} />
          </Route>
          <Route path="/book/edit/:bookId" element={<PrivateRoute />}>
            <Route path="/book/edit/:bookId" element={<UpdateBook />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
