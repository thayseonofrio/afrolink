import React, { Component} from "react"
import {hot} from "react-hot-loader"
import "./App.css"
import List from "./list"
class App extends Component{
	render(){
		return(
			<div className="App">
				<h1> AfroLink </h1>
				<List/>
			</div>
		)
	}
}

export default hot(module)(App)