import Sort from "../assets/Sorting.png";
import Search from "../assets/Binary_Search.png";
import Graph from "../assets/Graph.png";
import { Navigate, useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  function sortClicked() {
    navigate("/sorting");
  }

  function searchClicked() {
    navigate("/searching");
  }

  function graphClicked() {
    navigate("/graph");
  }

  return (
    <div className="mainpage">
      <h3 style={{ textAlign: "center", fontSize: "50px" }}>
        Algorithm Visualiser
      </h3>
      <div className="card" style={{ padding: "150px" }}>
        <div className="individualCard" onClick={sortClicked}>
          <img src={Sort} alt="SortAlgorithms" />
          <h2>Sorting</h2>
        </div>

        <div className="individualCard" onClick={searchClicked}>
          <img src={Search} alt="SearchAlgorithms" />
          <h2>Searching</h2>
        </div>

        <div className="individualCard" onClick={graphClicked}>
          <img src={Graph} alt="GraphAlgorithms" />
          <h2>Graph Algos</h2>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
