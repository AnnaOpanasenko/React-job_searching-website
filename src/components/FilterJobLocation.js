import React from "react";
import AsyncSelect from "react-select/async";

const city = [
	{ value: "brussel", label: "Brussel" },
	{ value: "antwerpen", label: "Antwerpen" },
	{ value: "vilvoorde", label: "Vilvoorde" },
	{ value: "mechelen", label: "Mechelen" },
	{ value: "morzel", label: "Morzel" },
	{ value: "leuven", label: "Leuven" },
];
const handleChange = (selectedCity) => {
	console.log("handleChange", selectedCity);
};
const loadOptions = (searchValue, callback) => {
	setTimeout(() => {
		const filteredCity = city.filter((city) =>
			city.label.toLowerCase().includes(searchValue.toLowerCase())
		);
		callback(filteredCity);
	}, 1000);
};

const FilterJobLocation = () => (
	<AsyncSelect
		isMulti
		onChange={handleChange}
		loadOptions={loadOptions}
		defaultOptions
		theme={(theme) => ({
			...theme,
			borderRadius: 0,
			colors: {
				...theme.colors,
				primary25: "lightgrey",
				primary: "black",
			},
		})}
	/>
);

export default FilterJobLocation;
