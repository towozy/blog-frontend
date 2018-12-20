/*
*
* App
*
*/
import React from "react";
import {Switch, Route} from "react-router-dom";
import ListPage from "../pages/ListPage";
import PostPage from "../pages/PostPage";
import EditorPage from "../pages/EditorPage";
import NotFoundPage from "../pages/NotFoundPage";


const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={ListPage}/>
				<Route exact path="/page/:page" component={ListPage}/>
				<Route exact path="/tag:/tag:/page?" component={ListPage}/>
				<Route exact path="/post/:id" component={PostPage}/>
				<Route exact path="/editor" component={EditorPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	)
};

export default App;
