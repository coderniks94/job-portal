import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import PageFooter from "./components/PageFooter";
import JobListPage from "./pages/JobListPage";
import JobDetailPage from "./pages/JobDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import AddNewJobPage from "./pages/AddNewJobPage";

function App() {
    return (
		<>
			<Navbar />
			{/* <div style={{"marginBottom": "200px"}}> */}
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/jobs-list" element={<JobListPage />} />
					<Route path="/job-detail/:id" element={<JobDetailPage />} />
					<Route path="/new-job" element={<AddNewJobPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
                <PageFooter />
                
			</div>
            
			
		</>
	);
}

export default App;
