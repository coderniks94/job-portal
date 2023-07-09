import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import JobListPage from "./pages/JobListPage";
import JobDetailPage from "./pages/JobDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import AddNewJobPage from "./pages/AddNewJobPage";
import RegisterCompanyPage from "./pages/RegisterCompanyPage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./context/AuthContext";
import LogoutPage from "./pages/LogoutPage";
import RootComponent from "./components/RootComponent";
import GetStarted from "./pages/GetStartedPage";
import RecruiterDashboardPage from "./pages/RecruiterDashboardPage";

function App() {
    return (
		<>
			{/* <Navbar /> */}
			{/* <div style={{"marginBottom": "200px"}}> */}
			<div>
				<Routes>
					<Route element={<AuthContext/>}>
						<Route element={<RootComponent />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/get-started" element={<GetStarted />} />
							<Route path="/signup" element={<SignupPage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/logout" element={<LogoutPage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/admin" element={<AdminPage />} />
							<Route path="/jobs-list" element={<JobListPage />} />
							<Route path="/job-detail/:id" element={<JobDetailPage />} />
							<Route path="/new-job" element={<AddNewJobPage />} />
							<Route path="/register-company" element={<RegisterCompanyPage />} />
							<Route path="/company-details/:id" element={<CompanyDetailsPage />} />
							<Route path="/recruiter-dashboard" element={<RecruiterDashboardPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Route>
					</Route>
				</Routes>
			</div>
			{/* <PageFooter /> */}
            
			
		</>
	);
}

export default App;
