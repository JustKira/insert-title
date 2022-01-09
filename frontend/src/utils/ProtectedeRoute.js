
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/ral/AuthContext";
import { connect } from "react-redux";
const ProtectedeRoute = (props) => {
  return props.accessToken ? <Outlet /> : <Navigate to="/Login" />;
  
};
const mapPropsToState = (state) => {
  return { accessToken : state.auth.state.access}
}
export default connect(mapPropsToState)(ProtectedeRoute);