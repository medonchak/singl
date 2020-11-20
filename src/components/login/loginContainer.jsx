import { connect } from "react-redux";
import { getAuthThunk } from "../../redux/reducer/authReducer";
import Login from "./login";
const mapStateToProps =(state)=>{
    return{
        isAuth:state.auth.isAuth 
    }
}
const LoginContainer=connect(mapStateToProps,{getAuthThunk})(Login)
export default LoginContainer