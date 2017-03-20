import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"
import ReduxModal from "react-redux-modal"

import Edit from "./pages/Edit.jsx";
import Layout from "./pages/Layout.jsx";
import Recipe from "./pages/Recipe.jsx";

import store from "./store"

const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);
console.log(history);
 ReactDOM.render(
    <Provider store={store}>
        <div>
            <ReduxModal />
            <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <Route path='edit(/:id)' component={Edit}/>
                    <Route path='recipe(/:id)' component={Recipe} />
                </Route>
            </Router>
        </div>
    </Provider>,
app);