import {Route,Switch} from 'react-router-dom';
import UserProfile from '../pages/UserProfile/UserProfile';
import Album from '../pages/Album/Album';
export default function AppRouter(){

    return(
        <Switch>
            <Route exact path="/userprofile/:uid">
                <UserProfile />
            </Route>
            <Route exact path="/userprofile/:userid/album/:albumid">
                <Album />
            </Route>
        </Switch>

    )
}