import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import PageFooter from "./components/PageFooter";
import JobListPage from "./pages/JobListPage";
import JobDetailPage from "./pages/JobDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
		<>
			<Navbar />
			<div style={{"marginBottom": "200px"}}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/jobs-list" element={<JobListPage />} />
					<Route path="/job-detail/:id" element={<JobDetailPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
                <PageFooter />
                
			</div>
            
			
		</>
	);
}

export default App;
