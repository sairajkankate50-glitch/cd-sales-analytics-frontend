const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#111827",
      color: "white",
      padding: "20px"
    }}>
      <h2>Dashboard</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>📊 Analytics</li>
        <li>📈 Reports</li>
        <li>⚙ Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
