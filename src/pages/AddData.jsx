import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
import "./Data.css";

const AddData = () => {

  const navigate = useNavigate();

  const [month, setMonth] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [revenue, setRevenue] = useState("");

  const addData = async () => {
  try {

    await API.post("/api/analytics", {
      month,
      product,
      quantity: Number(quantity),
      revenue: Number(revenue) || 0
    });

    // Reset form (initial stage)
    setMonth("");
    setProduct("");
    setQuantity("");
    setRevenue("");

    // Navigate to graph page
    navigate("/graph");

  } catch (error) {
    console.log("Error adding data:", error);
  }
};
  const showPieChart = () => {
    navigate("/pie-chart");
  };
  const showMonthlyChart = () => {
    navigate("/monthly");
  };

  const clearForm = () => {
    console.log("clearing form")
  setMonth("");
  setProduct("");
  setQuantity("");
  setRevenue("");
};

  return (
    <>
      <nav>
        <h2>Analytics</h2>
      </nav>

      <div className="inputsales">

        <h3>Add Sales Data</h3>

        <select value={month} onChange={(e)=>setMonth(e.target.value)}>
<option value="">Select Month</option>
<option>January</option>
<option>February</option>
<option>March</option>
<option>April</option>
</select>

        <input
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />

       <button type="button" onClick={addData}>
Save & View Graph
</button>

<button type="button" onClick={showPieChart}>
Show Pie Chart
</button>

<button type="button" onClick={clearForm}>
Clear
</button>
<button type="button" onClick={showMonthlyChart}>
Show Monthly Chart
</button>
      </div>
    </>
  );
};

export default AddData;