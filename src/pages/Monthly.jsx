import { useEffect, useState } from "react";
import API from "../services/api";
import {BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from "recharts";

const Monthly = () => {

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
    <>
   <h3>Monthly Revenue</h3>
   
             <BarChart width={700} height={300} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="month" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Bar dataKey="revenue" />
             </BarChart>
   
             {/* Line Chart */}
  </>
  );
};

export default Monthly;

