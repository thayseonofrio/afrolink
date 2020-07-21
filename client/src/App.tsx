import React, { Component} from "react"
import {hot} from "react-hot-loader"
import "./App.css"
import List from "./components/list"
import Menu from "./components/menu"
import Header from "./components/header"
class App extends Component{
	render(){
		return(
			<div className="App">
				<Menu />
				<Header />
				<List/>
			</div>
		)
	}
}

export default hot(module)(App)