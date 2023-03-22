// import { useLocation } from "react-router-dom";

// const location = useLocation();

export const getQueryParamsFromUrl = function () {
	return new URLSearchParams(window.location.search);
};

export const getQueryParamValueByKey = function (key) {
	const params = new URLSearchParams(window.location.search);
	return params.get(key);
};

export const addQueryParamsToUrl = function (key, values) {
	const searchParams = new URLSearchParams();
	searchParams.append(key, values.join(","));
	// searchParams.set(key, values.join(','));
	window.history.pushState({
		pathname: window.location.pathname,
		search: searchParams.toString(),
	});
	// history.push({
	//     pathname: window.location.pathname,
	//     search: searchParams.toString()
	//   });
};

export const appendQueryParam = (paramName, paramValue) => {
	const currentUrl = new URL(window.location.href);

	const queryParams = new URLSearchParams(currentUrl.search);

	queryParams.has(paramName)
		? queryParams.set(paramName, paramValue)
		: queryParams.append(paramName, paramValue);
        
	currentUrl.search = queryParams.toString();

	window.history.pushState(null, "", currentUrl.toString());
};
