const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  addBook,
  getBook,
  getBooks,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

router.route("/").get(protect, getBooks).post(protect, addBook);

router
  .route("/:id")
  .get(protect, getBook)
  .delete(protect, deleteBook)
  .put(protect, updateBook);

module.exports = router;
