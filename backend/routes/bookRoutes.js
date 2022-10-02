const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { createBook, getBook } = require("../controllers/bookController");

router.get("/book", createBook);
router.post("/book", getBook);

router.get("/books", protect, getBooks);

module.exports = router;
