import Sort from "../images/Sorting.png";
import Search from "../images/Binary_Search.png";
import Graph from "../images/Graph.png";
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
      <h3
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Algorithm Visualiser
      </h3>
      <div className="card" style={{ padding: "150px" }}>
        <div className="individualCard" onClick={searchClicked}>
          <img src={Search} className="algoImage" alt="SearchAlgorithms" />
          <h2>Searching</h2>
        </div>

        <div className="individualCard" onClick={sortClicked}>
          <img src={Sort} className="algoImage" alt="SortAlgorithms" />
          <h2>Sorting</h2>
        </div>

        <div className="individualCard" onClick={graphClicked}>
          <img src={Graph} className="algoImage" alt="GraphAlgorithms" />
          <h2>Graph Algos</h2>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
