import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
import Navbar from "../component/Navbar.jsx";
import Sidebar from "../component/Sidebar.jsx";
import StatCard from "../component/StatCard.jsx";

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");   // ✅ search state
  const navigate = useNavigate();

  // Fetch analytics data
  const fetchData = async () => {
    try {
      const res = await API.get("/analytics");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calculations
  const totalProducts = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalTransactions = data.length;
  const avgRevenue = totalTransactions
    ? (totalRevenue / totalTransactions).toFixed(2)
    : 0;

  // Search filter
  const filteredData = data.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  // Delete single item
  const deleteItem = async (id) => {
    try {
      await API.delete(`/analytics/${id}`);
      fetchData(); // reload table
    } catch (error) {
      console.log(error);
    }
  };

  // Reset all analytics
  const resetData = async () => {
    try {
      await API.delete("/analytics");
      setData([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>

          {/* Buttons */}
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => navigate("/add-data")}>
              Add Sales Data
            </button>

            <button
              onClick={resetData}
              style={{ marginLeft: "10px" }}
            >
              Reset Analytics
            </button>
          </div>

          {/* Stat Cards */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <StatCard title="Total Revenue" value={totalRevenue} />
            <StatCard title="Products Sold" value={totalProducts} />
            <StatCard title="Avg Revenue" value={avgRevenue} />
            <StatCard title="Total Transactions" value={totalTransactions} />
          </div>

          {/* Table Section */}
          <h3 style={{ marginTop: "40px" }}>Recent Sales</h3>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px",
              marginBottom: "15px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />

          <table style={{ width: "100%", borderCollapse: "collapse" }}>

            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Month</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Product</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Qty</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Revenue</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                    No sales data found
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr key={item._id}>

                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {item.month}
                    </td>

                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {item.product}
                    </td>

                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {item.quantity}
                    </td>

                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {item.revenue}
                    </td>

                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      <button
                        style={{ marginRight: "5px" }}
                        onClick={() => alert("Edit feature coming soon")}
                      >
                        ✏ Edit
                      </button>

                      <button
                        style={{ background: "red", color: "white" }}
                        onClick={() => deleteItem(item._id)}
                      >
                        🗑 Delete
                      </button>
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;