
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/ral/AuthContext";

const ProtectedeRoute = () => {

  let {user} = useContext(AuthContext)
  return user ? <Outlet /> : <Navigate to="/Login" />;
  
};

export default ProtectedeRoute;