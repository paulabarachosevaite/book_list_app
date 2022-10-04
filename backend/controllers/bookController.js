const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Book = require("../models/bookModel");

// GET USER BOOKS
const getBooks = asyncHandler(async (req, res) => {
  // Get user using user id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const books = await Book.find({ user: req.user.id });
  res.status(200).json(books);
});

// GET BOOK
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }
  if (book.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  res.status(200).json(book);
});

// ADD NEW BOOK
const addBook = asyncHandler(async (req, res) => {
  const { title, author, genre, description, haveRead } = req.body;
  if (!title || !author) {
    res.status(400);
    throw new Error("Please add a title or description");
  }
  // Get user using user id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const book = await Book.create({
    title,
    author,
    genre,
    description,
    haveRead,
    user: req.user.id,
  });
  res.status(201).json(book);
});

// UPDATE BOOK
const updateBook = asyncHandler(async (req, res) => {
  // Get user using user id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }
  if (book.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json(updatedBook);
});
// DELETE BOOK
const deleteBook = asyncHandler(async (req, res) => {
  // Get user using user id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }
  if (book.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }
  await book.remove();
});

module.exports = {
  getBook,
  getBooks,
  addBook,
  deleteBook,
  updateBook,
};
