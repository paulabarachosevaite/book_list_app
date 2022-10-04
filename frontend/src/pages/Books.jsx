import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../features/books/bookSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import BookItem from "../components/BookItem";

function Books() {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (!books) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <h1 className="sectionTitle">Books</h1>
      <div>
        {books.map((book) => (
          <BookItem key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}
export default Books;
