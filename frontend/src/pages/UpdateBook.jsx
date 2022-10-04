import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getBook, updateBook } from "../features/books/bookSlice";
import BackButton from "../components/BackButton";

function UpdateBook() {
  const { book, isLoading, isError, message } = useSelector(
    (state) => state.books
  );

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [genre, setGenre] = useState(book.genre);
  const [haveRead, setHaveRead] = useState(book.haveRead);

  const { bookId, bookData } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bookGenre = [
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
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ author, title, genre, description, haveRead }));
  };

  return (
    <>
      <BackButton url="/" />
      <section>
        <h1 className="sectionTitle">Add new book</h1>
        <p className="sectionText">Please fill out the fields below</p>
      </section>
      <section className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="inputContainer">
            <label htmlFor="author" className="inputGroupLabel">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              placeholder="Book Author"
              className="inputGroupItem"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="title" className="inputGroupLabel">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Book Title"
              className="inputGroupItem"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="genre" className="inputGroupLabel">
              Genre
            </label>
            <select
              className="inputGroupItem selectInput"
              name="genre"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value={""}>Choose</option>

              {bookGenre.map((genre) => {
                return (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="inputContainer">
            <label htmlFor="description" className="inputGroupLabel">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Book Description"
              className="inputGroupItem "
            ></textarea>
          </div>
          <label htmlFor="haveRead" className="inputGroupLabel">
            Have Read
          </label>
          <select
            className="inputGroupItem selectInput"
            name="haveRead"
            id="haveRead"
            value={haveRead}
            onChange={(e) => setHaveRead(e.target.value)}
          >
            <option value={""}>Choose</option>

            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          <button className="formSubmitBtn">Submit</button>
        </form>
      </section>
    </>
  );
}
export default UpdateBook;
