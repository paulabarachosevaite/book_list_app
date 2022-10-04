import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div>
        <Link className="headerLink underline" to="/">
          Home
        </Link>
      </div>
      <ul className="headerList">
        {user ? (
          <li className="headerListItem">
            <button className="logoutBtn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </ul>
    </header>
  );
}
export default Header;
