import Login from "./Login.jsx";
import AddData from "./pages/AddData.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import {Routes, Route} from "react-router-dom"
import GraphPage from "./pages/GraphPage.jsx";
import Piechart from "./pages/Piechart.jsx";
import Monthly from "./pages/Monthly.jsx";
function App() {
  return (
   <>
  <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-data" element={<AddData/>}/>
      <Route path="/graph" element={<GraphPage/>} />
      <Route path="/pie-chart" element={<Piechart/>} />
      <Route path="/monthly" element={<Monthly/>} />
    </Routes>
    </>
  );
}

export default App;
