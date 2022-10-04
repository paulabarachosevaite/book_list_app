import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackButton({ url }) {
  return (
    <Link className="goBackBtn" to={url}>
      <FaArrowAltCircleLeft /> Go Back
    </Link>
  );
}
export default BackButton;
