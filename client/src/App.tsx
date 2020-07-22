import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import List from "./components/list";
import Menu from "./components/menu";
import Header from "./components/header";
import Register from "./components/register";

const App = () => {
	const [toggleRegister, setToggleRegister] = useState(false)

	const getPageToDisplay = () => {
		if (toggleRegister) {
			return <Register />
		}
		return <List />
	}
	return (
		<div className="App">
			<Menu setToggle={setToggleRegister} toggle={toggleRegister}/>
			<Header />
			{getPageToDisplay()}
		</div>
	);
};

export default hot(module)(App);
