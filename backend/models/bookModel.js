const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "",
        "Fantasy",
        "Science Fiction",
        "Adventure",
        "Romance",
        "Detective & Mystery",
        "Horror",
        "Thriller",
        "LGBTQ+",
        "Historical Fiction",
        "Young Adult",
        "Children's fiction",
        "Biography",
        "Cooking",
        "Art & Photography",
        "Self-Help",
        "Health & Fitness",
        "Crafts & Hobbies",
        "Entertainment",
        "Business",
        "Law",
        "Politics & Social Sciences",
        "Religion & Spirituality",
        "Education",
        "Travel",
        "True Crime",
        "Other",
      ],
    },
    description: {
      type: String,
    },
    haveRead: {
      type: String,
      enum: ["", "Yes", "No"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
