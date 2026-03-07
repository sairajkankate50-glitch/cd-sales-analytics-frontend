import { useEffect, useState } from "react";
import API from "../services/api";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const Piechart = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/sales");
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

      <h2>Product Revenue Pie Chart</h2>

      <PieChart width={500} height={400}>
        <Pie
          data={data}
          dataKey="revenue"
          nameKey="product"
          outerRadius={150}
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>

    </div>
  
  );
};

export default Piechart;
