import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Success from "./pages/Success";
import Verify from "./pages/Verify";
import Submit from "./pages/Submit";
import Reconnect from "./pages/Reconnect";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/success" element={<Success />} />
			<Route path="/verify" element={<Verify />} />
			<Route path="/submit" element={<Submit/>} />
			<Route path="/reconnect" element={<Reconnect/>} />
		</Routes>
	);
};
export default App;
