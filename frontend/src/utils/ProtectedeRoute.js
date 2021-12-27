
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/ral/AuthContext";

const ProtectedeRoute = () => {

  let {ituser} = useContext(AuthContext)
  let isClassed = (user) => {
    if(user){
      if(user.classified){
        return true
      }
      else{
        return null
      }
    }
    else{
      return null
    }
  }
  return isClassed(ituser)? <Outlet /> : <Navigate to="/SR" />;
  
};

export default ProtectedeRoute;