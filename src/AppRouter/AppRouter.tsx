import {Route,Switch} from 'react-router-dom';
import UserProfile from '../pages/UserProfile/UserProfile';

export default function AppRouter(){

    return(
        <Switch>
            <Route path="/userprofile/:uid">
                <UserProfile />
            </Route>
        </Switch>

    )
}