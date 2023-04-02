import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function useQueryParams() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [queryParams, setQueryParams] = useState(searchParams);

	useEffect(() => {
		setQueryParams(searchParams);
	}, [searchParams]);

	const getQueryParam = (key) => {
		return queryParams.get(key);
	};

	const setQueryParam = (key, value) => {
		const params = new URLSearchParams(queryParams);
		if (value) {
			params.set(key, value);
		} else {
			params.delete(key);
		}
		setSearchParams(params);
		setQueryParams(params);
	};

	const resetQueryParam = (key, value) => {
		const params = new URLSearchParams(queryParams);
		if (value) {
			params.set(key, value);
		} else {
			params.delete(key);
		}
		setSearchParams(params);
		setQueryParams(params);
	};

	return { getQueryParam, setQueryParam, resetQueryParam };
}

export default useQueryParams;
