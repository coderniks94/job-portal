import { Container } from "react-bootstrap";
import SearchBox from "../components/SearchBox";
import React, { useEffect, useState } from "react";
import JobPosts from "../components/JobPosts";
import CheckboxList from "../components/CheckboxList";
import {
	getAllDocsFromCollection,
	getFilteredJobPosts,
} from "../firebase/dbTransactions";
import useQueryParams from "../hooks/useQueryParams";
import { COMPANY_ID_URL_PARAM, DEPT_ID_URL_PARAM, LOCATION_ID_URL_PARAM, SEARCH_TERM_URL_PARAM } from "../utils/constants";

export default function JobListPage() {
	const [companies, setCompanies] = useState([]);
	const [departments, setDepartments] = useState([]);
	const [locations, setLocations] = useState([]);
	const [filteredJobPosts, setFilteredJobPosts] = useState([]);

	const [selectedCompanies, setSelectedCompanies] = useState([]);
	const [selectedDepartments, setSelectedDepartments] = useState([]);
	const [selectedLocations, setSelectedLocations] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);

	const { getQueryParam, setQueryParam, resetQueryParam } = useQueryParams();

	const getAllCompanies = async () => {
		var allCompanies = (await getAllDocsFromCollection("companies")).map(
			(com) => {
				return { ...com, label: com.name };
			}
		);

		setCompanies(allCompanies);
	};

	const getAllDepartments = async () => {
		var allDepts = (await getAllDocsFromCollection("departments")).map(
			(dep) => {
				return { ...dep, label: dep.name };
			}
		);
		setDepartments(allDepts);
	};
	const getAllLocations = async () => {
		var allLocations = (
			await getAllDocsFromCollection("officeLocations")
		).map((loc) => {
			return {
				...loc,
				label: `${loc.city}, ${loc.state}, ${loc.country}`,
			};
		});
		console.log("allLocations", allLocations);
		setLocations(allLocations);
	};

	const getFilteredPosts = async (
		companyIdQueryParams,
		departmentIdQueryParams,
		locationIdQueryParams,
		searchTermQueryParams
	) => {
		const filteredPosts = await getFilteredJobPosts(
			companyIdQueryParams,
			departmentIdQueryParams,
			locationIdQueryParams,
			searchTermQueryParams
		);
		setFilteredJobPosts(filteredPosts);
	};

	useEffect(() => {
		setTimeout(() => {
			getAllCompanies();
		}, 0);
		setTimeout(() => {
			getAllDepartments();
		}, 0);
		setTimeout(() => {
			getAllLocations();
		}, 0);

		const companyIdQueryParams = getQueryParam(COMPANY_ID_URL_PARAM)?.split(",") || [];
		setSelectedCompanies(companyIdQueryParams || []);

		const departmentIdQueryParams = getQueryParam(DEPT_ID_URL_PARAM)?.split(",") || [];
		setSelectedDepartments(departmentIdQueryParams);

		const locationIdQueryParams = getQueryParam(LOCATION_ID_URL_PARAM)?.split(",") || [];
		setSelectedLocations(locationIdQueryParams);

		const searchTermQueryParams = getQueryParam(SEARCH_TERM_URL_PARAM) || '';
		setSearchTerm(searchTermQueryParams);

		getFilteredPosts(
			companyIdQueryParams,
			departmentIdQueryParams,
			locationIdQueryParams,
			searchTermQueryParams
		);
	}, []);

	const handleCompaniesSelected = function (companyIdList) {
		setSelectedCompanies(companyIdList);
		setQueryParam(COMPANY_ID_URL_PARAM, companyIdList.join());
		getFilteredPosts(
			companyIdList,
			selectedDepartments,
			selectedLocations,
			searchTerm
		);
	};

	const handleDeptSelected = function (deptIdList) {
		setSelectedDepartments(deptIdList);
		setQueryParam(DEPT_ID_URL_PARAM, deptIdList.join());
		getFilteredPosts(
			selectedCompanies,
			deptIdList,
			selectedLocations,
			searchTerm
		);
	};

	const handleLocationSelected = function (locationIdList) {
		setSelectedLocations(locationIdList);
		setQueryParam(LOCATION_ID_URL_PARAM, locationIdList.join());
		getFilteredPosts(
			selectedCompanies,
			selectedDepartments,
			locationIdList,
			searchTerm
		);
	};

	const handleSearchTermSet = function (searchTerm) {
		setSearchTerm(searchTerm);
		setQueryParam(SEARCH_TERM_URL_PARAM, searchTerm);
	};

	const handleSearchSubmit = function() {
		getFilteredPosts(
			selectedCompanies,
			selectedDepartments,
			selectedLocations,
			searchTerm
		);
		console.log("searching for ", searchTerm);
	}

	return (
		<Container>
			<SearchBox
				handleSearchTermSet={handleSearchTermSet}
				searchTerm={searchTerm}
				handleSearchSubmit={handleSearchSubmit}
			/>
			<div className="d-flex">
				<div className="d-flex flex-column w-25">
					{companies && (
						<CheckboxList
							items={companies}
							setSelectedItemIds={handleCompaniesSelected}
							searchLabel="Search Companies"
							selectedItems={selectedCompanies}
						/>
					)}
					<hr />
					{departments && (
						<CheckboxList
							items={departments}
							setSelectedItemIds={handleDeptSelected}
							searchLabel="Search Departments"
							selectedItems={selectedDepartments}
						/>
					)}
					<hr />
					{locations && (
						<CheckboxList
							items={locations}
							setSelectedItemIds={handleLocationSelected}
							searchLabel="Search Locations"
							selectedItems={selectedLocations}
						/>
					)}
					<hr />
				</div>
				<div className="min-vh-100 w-100 ms-3 mb-5">
					<h4>{filteredJobPosts.length} results</h4>
					<JobPosts jobPosts={filteredJobPosts} />
				</div>
			</div>
		</Container>
	);
}
