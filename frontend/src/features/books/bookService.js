import axios from "axios";

const API_URL = "/books/";

// Create new book
const createBook = async (bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, bookData, config);

  return response.data;
};

// Get books
const getBooks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// GET BOOK
const getBook = async (bookId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + bookId, config);
  return response.data;
};

// UPDATE BOOK
const updateBook = async (bookId, bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + bookId,
    { haveRead: "Yes" },
    config
  );
  return response.data;
};

const bookService = {
  createBook,
  getBooks,
  getBook,
  updateBook,
};

export default bookService;
