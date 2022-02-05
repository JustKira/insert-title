import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
const ProtectedeRoute = (props) => {
  return props.accessToken ? <Outlet /> : <Navigate to="/Login" />;
  
};
const mapPropsToState = (state) => {
  if (state.auth.state) {
    return { accessToken : state.auth.state.access}
  }
  
}
export default connect(mapPropsToState)(ProtectedeRoute);