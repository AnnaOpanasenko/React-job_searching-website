import React, { useEffect, useState } from "react";
import { Container, FormControl, Collapse, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "./ButtonFill";
import FilterDropdown from "./FilterDropdown";
import JobCard from "./JobCard";

function Search() {
	const [value, setValue] = useState("");
	const [isVisible, initHs] = useState(false);

	// const [jobs, setJobs] = useState(null);
	// useEffect(() => async () => {
	// 	if (jobs === null) {
	// 		const response = await fetch("/api/jobs");
	// 		setJobs(await response.json());
	// 	}
	// });

	const invokeCollapse = () => {
		return initHs(!isVisible);
	};

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const onSearch = (searchTerm) => {
		//api to fetch a serch results
		console.log("search", searchTerm);
	};

	return (
		<>
			<Container className="d-flex flex-column justify-content-between align-items-center container-fluid">
				<form
					method="GET"
					action="/jobs"
					className="d-flex justify-content-between align-items-center flex-column flex-sm-row container-fluid gap-4"
					style={{ maxWidth: "768px" }}
				>
					<FormControl
						name="q"
						type="text"
						placeholder="Position, company, keyword"
						className="form-control-lg m-2"
						style={{ zIndex: 2 }}
						onChange={handleChange}
						value={value}
					/>
					<div className="d-flex gap-2">
						<Button
							variant="warning"
							className="rounded-pill me-2 text-uppercase"
							onClick={() => onSearch(value)}
						>
							<FormattedMessage id="button.search" />
						</Button>
						<div>
							<Button
								variant="outline-warning"
								className=" rounded-pill me-2 text-uppercase"
								onClick={invokeCollapse}
								aria-controls="collapse_card"
								aria-expanded={isVisible}
							>
								<FormattedMessage id="button.filter" />
							</Button>
						</div>
					</div>
				</form>
				<Collapse in={isVisible}>
					<div id="collapse_card" className="container-fluid">
						<FilterDropdown />
					</div>
				</Collapse>
			</Container>
		</>
	);
}

export default Search;
