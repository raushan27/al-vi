import Logo from "../images/Logo.png";
import GithubLogo from "../images/github.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <div className="my-header">
        <img
          onClick={handleClick}
          style={{ height: "43px", margin: "10px" }}
          className=""
          src={Logo}
          alt="App Logo"
        />
        <button
          onClick={props.onSubmit}
          className="btn"
          style={{ backgroundColor: "#acbcff" }}
        >
          Generate New Array
        </button>
        <a href="https://github.com/raushan27/al-vi">
          <img
            style={{ height: "43px", margin: "10px" }}
            src={GithubLogo}
            alt="git-logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
