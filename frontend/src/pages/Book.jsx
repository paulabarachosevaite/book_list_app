import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getBook, reset } from "../features/books/bookSlice";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import BookItem from "../components/BookItem";

function Book() {
  const { book, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.books
  );

  // Get id from the URL
  const { bookId, bookData } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getBook(bookId));
  }, [isError, dispatch, message, bookId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something went wrong</h3>;
  }
  const onBookHaveRead = () => {
    dispatch(getBook(bookId, bookData));
    toast.success("Marked as read");
    navigate("/books");
  };

  return (
    <div>
      <div className="bookItemContainer">
        <p className="bookItemTitle">Date Added </p>
        <p className="bookItem">
          {new Date(book.createdAt).toLocaleString("en-GB")}
        </p>
      </div>
      <div className="bookItemContainer">
        <p className="bookItemTitle">Book Author </p>
        <p className="bookItem"> {book.author}</p>
      </div>
      <div className="bookItemContainer">
        <p className="bookItemTitle">Book Title</p>
        <p className="bookItem">{book.title}</p>
      </div>
      <div className="bookItemContainer">
        <p className="bookItemTitle">Book description</p>
        <p className="bookItem">{book.description}</p>
      </div>
      {book.genre !== "" ? (
        <div className="bookItemContainer">
          <p className="bookItemTitle">Book Genre</p>
          <p className="bookItem">{book.genre}</p>
        </div>
      ) : (
        <></>
      )}
      {book.haveRead !== "" ? (
        <div className="bookItemContainer">
          <p className="bookItemTitle">Have read:</p>
          <p className="bookItem">{book.haveRead}</p>
        </div>
      ) : (
        <></>
      )}

      <button onClick={onBookHaveRead}>Have Read</button>
    </div>
  );
}
export default Book;
