import { Navigate } from "react-router-dom";

function AdminProtected({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
}

export default AdminProtected;
