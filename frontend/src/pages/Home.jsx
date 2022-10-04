import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <h1 className="sectionTitle">My books</h1>
        <p className="sectionText">Choose the option below</p>
      </section>
      <div className="homeOptions">
        <Link className="homeBtn newBook" to="/new-book">
          Add new book
        </Link>
        <Link className="homeBtn lists" to="/books">
          See all books
        </Link>
      </div>
    </>
  );
}
export default Home;
