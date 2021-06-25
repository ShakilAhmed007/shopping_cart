import { round } from "lodash";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import Home from "./pages/Home"
import MyCart from "./pages/MyCart";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/my-cart'>
						<MyCart />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
