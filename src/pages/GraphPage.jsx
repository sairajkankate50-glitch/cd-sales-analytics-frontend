import { useEffect, useState } from "react";
import API from "../services/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const GraphPage = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/analytics");
      setData(res.data);
      console.log("Graph Data:", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Revenue Graph</h2>

      <LineChart width={700} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>

    </div>
  );
};

export default GraphPage;