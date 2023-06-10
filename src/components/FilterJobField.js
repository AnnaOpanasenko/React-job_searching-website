import React from "react";
import AsyncSelect from "react-select/async";

const field = [
	{ value: "it", label: "IT" },
	{ value: "medicine", label: "Medicine" },
	{ value: "art", label: "Art" },
	{ value: "science", label: "Science" },
	{ value: "finance", label: "Finance" },
	{ value: "ingener", label: "Ingener" },
];
const handleChange = (selectedField) => {
	console.log("handleChange", selectedField);
};
const loadOptions = (searchValue, callback) => {
	setTimeout(() => {
		const filteredField = field.filter((field) =>
			field.label.toLowerCase().includes(searchValue.toLowerCase())
		);
		callback(filteredField);
	}, 500);
};

const FilterJobField = () => (
	<AsyncSelect
		isMulti
		classNamePrefix="field"
		loadOptions={loadOptions}
		onChange={handleChange}
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

export default FilterJobField;
