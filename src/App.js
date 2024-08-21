import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<Header />
								<Home />
								<Footer />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
