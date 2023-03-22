import { Container } from "react-bootstrap";
import SearchBox from "../components/SearchBox";
import React, { useEffect, useState } from "react";
import JobPosts from "../components/JobPosts";
import CheckboxList from "../components/CheckboxList";
import { addQueryParamsToUrl, appendQueryParam, getQueryParamValueByKey } from "../utils/urlUtils";

export default function JobListPage() {
	const [selectedCompanies, setSelectedCompanies] = useState([]);
	const [selectedDepartments, setSelectedDepartments] = useState([]);
	const [selectedLocations, setSelectedLocations] = useState([]);

	useEffect(() => {
		// const params = new URLSearchParams(window.location.search);
		// const myQueryParam = params.get('myQueryParam');
		// if (myQueryParam) {
		//   setQueryParam(myQueryParam);
		// }
		const companyIdQueryParams = getQueryParamValueByKey("company-id")?.split(",");
		setSelectedCompanies(companyIdQueryParams || []);

		const departmentIdQueryParams = getQueryParamValueByKey("department-id")?.split(",");
		setSelectedDepartments(departmentIdQueryParams || []);

		const locationIdQueryParams = getQueryParamValueByKey("location-id")?.split(",");
		setSelectedLocations(locationIdQueryParams || []);
	}, []);

	const handleCompaniesSelected = function(companyIdList) {
		setSelectedCompanies(companyIdList);
		// addQueryParamsToUrl('company-id', companyIdList);
		// appendQueryParam(window.location.href, 'company-id', companyIdList.join())
		appendQueryParam('company-id', companyIdList.join())
	}

	const handleDeptSelected = function(deptIdList) {
		setSelectedDepartments(deptIdList);
		// addQueryParamsToUrl('company-id', companyIdList);
		// appendQueryParam(window.location.href, 'company-id', companyIdList.join())
		appendQueryParam('department-id', deptIdList.join())
	}

	const handleLocationSelected = function(locationIdList) {
		setSelectedLocations(locationIdList);
		// addQueryParamsToUrl('company-id', companyIdList);
		// appendQueryParam(window.location.href, 'company-id', companyIdList.join())
		appendQueryParam('location-id', locationIdList.join())
	}

	const [companies, setCompanies] = useState([
		{ id: "123", label: "Amazon", value: "amazon"},
		{ id: "234", label: "Google", value: "google"},
		{ id: "345", label: "Facebook", value: "fb" },
		{ id: "456", label: "Microsoft", value: "msft"},
		{ id: "567", label: "ServiceNow", value: "snow"},
	]);

	const [departments, setDepartments] = useState([
		{ id: "123", label: "Finance", value: "finance" },
		{ id: "234", label: "HR", value: "hr" },
		{ id: "345", label: "Technology", value: "tech" },
		{ id: "456", label: "Marketing", value: "marketing" },
		{ id: "567", label: "Support", value: "support" },
		{ id: "678", label: "UX Design", value: "ux" },
		{ id: "789", label: "Sales", value: "sales" },
	]);

	const [locations, setLocations] = useState([
		{ id: "123", label: "Addison, Texas", value: "txs" },
		{ id: "234", label: "Bangalore, Karnataka", value: "bglr" },
		{ id: "345", label: "Hyderabad, Telangana", value: "hyd" },
		{ id: "456", label: "Chicago, Illinois", value: "illn" },
		{ id: "567", label: "New Delhi, New Delhi", value: "ndl" },
		{ id: "678", label: "New York, New York", value: "nyc" },
		{ id: "789", label: "Los Angeles, California", value: "lac" },
	]);

	const [filteredJobPosts, setFilteredJobPosts] = useState([
		{
			positionName: "Senior Sales Execuive",
			id: "12345",
			location: "Hyderabad, Telangana, India",
			postedDate: "Dec 26th, 2022",
			company: {
				name: "Amazon",
				id: "930139",
			},
		},
		{
			positionName: "Software Engineer",
			id: "10390123",
			location: "San Francisco, California, United States",
			postedDate: "Dec 20th, 2022",
			company: {
				name: "Google",
				id: "823921",
			},
		},
		{
			positionName: "Product Manager",
			id: "19283012",
			location: "Amsterdam, UK",
			postedDate: "Dec 26th, 2022",
			company: {
				name: "Airbnb",
				id: "38912",
			},
		},
		{
			positionName: "Engineering Manager",
			id: "2931893",
			location: "Amsterdam, UK",
			postedDate: "Dec 26th, 2022",
			company: {
				name: "Netflix",
				id: "38912",
			},
		},
		{
			positionName: "HR Business partner",
			id: "i298304293",
			location: "Amsterdam, UK",
			postedDate: "Dec 26th, 2022",
			company: {
				name: "Amazon",
				id: "38912",
			},
		},
		{
			positionName: "Associate Product Manager",
			id: "283913",
			location: "Amsterdam, UK",
			postedDate: "Dec 26th, 2022",
			company: {
				name: "Salesforce",
				id: "38912",
			},
		},
	]);

	return (
		<Container>
			<SearchBox />
			<div className="d-flex">
				<div className="d-flex flex-column w-25">
					<CheckboxList
						items={companies}
						setSelectedItemIds={handleCompaniesSelected}
						searchLabel="Search Companies"
						selectedItems={selectedCompanies}
					/>
					<hr />
					<CheckboxList
						items={departments}
						setSelectedItemIds={handleDeptSelected}
						searchLabel="Search Departments"
						selectedItems={selectedDepartments}
					/>
					<hr />
					<CheckboxList
						items={locations}
						setSelectedItemIds={handleLocationSelected}
						searchLabel="Search Locations"
						selectedItems={selectedLocations}
					/>
					<hr />
				</div>
				<div className="min-vh-100 w-100 ms-3 mb-5">
					<JobPosts jobPosts={filteredJobPosts} />
				</div>

			</div>
		</Container>
	);
}
