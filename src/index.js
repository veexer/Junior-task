import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Profile from 'my-profile'
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render((
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/my-profile" component={Profile} />
                <Route path="/" component={App} exact />
            </Switch>
        </BrowserRouter>
    </div>
), document.getElementById("root"));
