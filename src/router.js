import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './Login.js'
import Todo from './todo.js';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/todo">
                    <Todo />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router;
