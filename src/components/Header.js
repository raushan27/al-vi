import Logo from "../images/Logo.png";
import GithubLogo from "../images/github.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function Clicked() {
    navigate("/");
  }

  return (
    <div>
      <div className="my-header">
        <img
          style={{ height: "43px", margin: "10px" }}
          onClick={Clicked}
          className=""
          src={Logo}
          alt="App Logo"
        />
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
