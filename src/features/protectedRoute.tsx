import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "../app/store";

function ProtectedRoute(props:any) {

    const loginValue = useSelector((state: RootState)=> state.islogin.value);

    return <>
        {!loginValue ? 
            <Redirect to="/login" />
            :
            <Route path={props.path}>{props.children}</Route>
        }
    </>
}
export default ProtectedRoute;

