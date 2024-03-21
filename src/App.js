import TableComponent from "./components/TableComponent";
import ChartOne from "./components/ChartOne";
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="app-container">
      <div className="chart-container"><ChartOne/></div>
      <div className="table-container"><TableComponent/></div>
    </div>
  );
}

export default App;
