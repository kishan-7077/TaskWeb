import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/loginPage";
import Signup from "./page/SignupPage";
import Home from "./page/HomePage";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
