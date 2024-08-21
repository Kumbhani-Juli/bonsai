import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Routes that include Header and Footer */}
					<Route
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
