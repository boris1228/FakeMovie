import { Route, Switch, useRouteMatch} from 'react-router-dom';

import SignIn from '../SignIn';
// import Checkout from '../Checkout';


export default function UserRouter(){
    const match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/sign-in`}>
                <SignIn />
            </Route>
            {/* <Route path={`${match.path}/check-out`}>
                <Checkout />
            </Route> */}
        </Switch>
    )

}

