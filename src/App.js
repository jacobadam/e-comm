import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "../src/Components/NavBar";
// import HomePage from "../src/Components/HomePage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">column one</div>
        <div className="col-6">column two</div>
          <span>
              <i className="fas fa-home"/>
          </span>
      </div> 
    </div>
  );
}

export default App;
