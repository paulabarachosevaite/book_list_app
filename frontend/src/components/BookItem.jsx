import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <div className="bookListContainer">
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

      <Link className="viewItemBtn" to={`/book/${book._id}`}>
        View
      </Link>
      <Link className="viewItemBtn" to={`/book/edit/${book._id}`}>
        Edit
      </Link>
    </div>
  );
}
export default BookItem;
