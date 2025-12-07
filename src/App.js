import { useState } from "react";
import Login from "./screens/Login";
import GerentePedido from "./screens/GerentePedido";
import ConfeitariaPedido from "./screens/ConfeitariaPedido";
import AdminDashboard from "./screens/AdminDashboard";

export default function App() {
  const [role, setRole] = useState("login");

  return (
    <div style={{ padding: 20 }}>
      {role === "login" && <Login onSelectRole={setRole} />}
      {role === "gerente" && <GerentePedido onBack={() => setRole("login")} />}
      {role === "confeitaria" && <ConfeitariaPedido onBack={() => setRole("login")} />}
      {role === "admin" && <AdminDashboard onBack={() => setRole("login")} />}
    </div>
  );
        }
