import React from "react";
import Select from "react-select";

const type = [
	{ value: "full time", label: "Full time" },
	{ value: "part time", label: "Part time" },
	{ value: "paid", label: "Paid" },
	{ value: "no paid", label: "No paid" },
	{ value: "office", label: "Office" },
	{ value: "online", label: "Online" },
];

const FilterJobType = () => (
	<Select
		isMulti
		classNamePrefix="type"
		options={type}
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

export default FilterJobType;
