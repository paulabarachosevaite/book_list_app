import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div>
        <Link className="headerLink underline" to="/">
          Home
        </Link>
      </div>
      <ul className="headerList">
        <li className="headerListItem">
          <Link className="headerLink underline" to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li className="headerListItem">
          <Link className="headerLink underline" to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
